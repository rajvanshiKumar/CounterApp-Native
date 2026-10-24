import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FF" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>±</Text>
          </View>

          <View>
            <Text style={styles.heading}>Counter App</Text>
            <Text style={styles.subtitle}>Count. Track. Achieve.</Text>
          </View>
        </View>

        {/* Counter Card */}
        <View style={styles.counterCard}>
          <Text style={styles.counterLabel}>CURRENT COUNT</Text>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.counterMessage}>
            {count === 0
              ? "Ready to start?"
              : count > 0
                ? "Keep it going!"
                : "Below zero!"}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.incrementButton]}
            onPress={increment}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonIcon}>＋</Text>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.decrementButton]}
            onPress={decrement}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonIcon}>−</Text>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>

        {/* Reset Button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={reset}
          activeOpacity={0.8}
        >
          <Text style={styles.resetIcon}>↻</Text>
          <Text style={styles.resetText}>Reset Counter</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>Counter App Developed by Rajvanshi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FF",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
    gap: 14,
  },

  logo: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: "#596CFF",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
  },

  heading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#172044",
  },

  subtitle: {
    fontSize: 13,
    color: "#7B83A6",
    marginTop: 4,
  },

  counterCard: {
    backgroundColor: "#6379F7",
    borderRadius: 28,
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 34,
    shadowColor: "#6379F7",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },

  counterLabel: {
    color: "#E9ECFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
  },

  count: {
    color: "#FFFFFF",
    fontSize: 82,
    fontWeight: "800",
    marginVertical: 8,
  },

  counterMessage: {
    color: "#F0F2FF",
    fontSize: 15,
    fontWeight: "500",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },

  actionButton: {
    flex: 1,
    minHeight: 125,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    elevation: 4,
  },

  incrementButton: {
    backgroundColor: "#21B883",
    shadowColor: "#21B883",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },

  decrementButton: {
    backgroundColor: "#FF5B70",
    shadowColor: "#FF5B70",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },

  buttonIcon: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "500",
    lineHeight: 48,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 6,
  },

  resetButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E8FA",
    borderRadius: 18,
    minHeight: 58,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 28,
  },

  resetIcon: {
    color: "#596CFF",
    fontSize: 27,
    fontWeight: "bold",
  },

  resetText: {
    color: "#3444B8",
    fontSize: 16,
    fontWeight: "700",
  },

  infoCard: {
    backgroundColor: "#E9EEFF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  infoIcon: {
    color: "#596CFF",
    fontSize: 32,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: "#233A8B",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 6,
  },

  infoDescription: {
    color: "#65719B",
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    textAlign: "center",
    color: "#A0A7C1",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginTop: "auto",
    paddingVertical: 22,
  },
});
