import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function Home({ route }: HomeProps) {
  const { email } = route.params;

  const [contador, setContador] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Contador de renders con useRef: se actualiza en CADA render pero,
  // a diferencia de useState, cambiar un ref NO provoca un re-render.
  // Esto evita el loop infinito que tendríamos si guardáramos esto
  // con useState dentro del useEffect sin dependencias.
  const renderCount = useRef(0);
  renderCount.current += 1;

  const agregarLog = (mensaje: string) => {
    setLogs((prev) => [mensaje, ...prev].slice(0, 15)); // limitamos a 15 para no saturar
  };


  // A. useEffect SIN arreglo de dependencias
  // Definición: al no recibir un segundo argumento, este efecto se
  // ejecuta DESPUÉS de cada render del componente, sin importar qué
  // haya cambiado.
  // Cuándo usarlo: cuando se necesita reaccionar a CUALQUIER
  // actualización de la UI.
  // dentro de este efecto — si lo hiciéramos, cada setState
  // dispararía un nuevo render, que volvería a ejecutar este mismo
  // efecto, generando un loop infinito. Por eso solo usamos
  // console.log y un contador con useRef (que no re-renderiza).

  useEffect(() => {
    console.log('Componente renderizado. Total de renders:', renderCount.current);
  });

  // useEffect con arreglo de dependencias VACÍO ([])
  // Definición: al pasar un arreglo vacío, React ejecuta el efecto
  // UNA SOLA VEZ, después del primer render (como componentDidMount).
  // No se vuelve a ejecutar aunque el componente se re-renderice.
  // Cuándo usarlo: inicialización que solo debe correr una vez.

  useEffect(() => {
    console.log('La pantalla Home se montó');
    agregarLog('[[]] Montaje inicial (solo una vez)');
  }, []);


  // B. useEffect CON arreglo de dependencias ([contador])
  // Definición: se ejecuta después del primer render y cada vez que
  // "contador" cambia entre un render y otro.
  // Cuándo usarlo: para reaccionar a un cambio de estado específico
  // sin ejecutar lógica en cada render.

  useEffect(() => {
    console.log('El contador cambió a:', contador);
    agregarLog(`[contador] Nuevo valor: ${contador}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {email}</Text>

      <Text style={styles.counter}>Contador: {contador}</Text>
      <Text style={styles.renders}>Renders totales: {renderCount.current}</Text>
      <Button title="Incrementar" onPress={() => setContador((c) => c + 1)} />

      <Text style={styles.logTitle}>Log de useEffect:</Text>
      <ScrollView style={styles.logBox}>
        {logs.map((log, i) => (
          <Text key={i} style={styles.logText}>
            {log}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: { fontSize: 18, marginBottom: 8 },
  counter: { fontSize: 22, fontWeight: 'bold' },
  renders: { fontSize: 14, color: '#666', marginBottom: 10 },
  logTitle: { marginTop: 20, fontWeight: 'bold' },
  logBox: {
    marginTop: 8,
    width: '100%',
    maxHeight: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
  },
  logText: { fontSize: 13, marginBottom: 4 },
});