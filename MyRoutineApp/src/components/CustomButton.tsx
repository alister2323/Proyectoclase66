import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
}

export default function CustomButton({ title, onPress, variant = 'primary' }: CustomButtonProps) {


  const styles = getStyles(variant);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
    StyleSheet.create({
        button: {
            backgroundColor: variant === "primary" ? 'navy' :
                              variant === "secondary" ? 'lightblue' : 'royalblue',
            borderRadius: 5,
            width: 200,
            paddingVertical: 10,
            marginVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonTitle: {
            color: variant === "tertiary" ? 'white' : (variant === "primary" ? 'white' : 'black'),
            fontWeight: '600',
        }
    });