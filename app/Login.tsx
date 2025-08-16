import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
      {/* Title */}
      <Text className="text-3xl font-bold text-white mb-10 tracking-wide">
        Pothole Detector
      </Text>

      {/* Glassy Login Card */}
      <View className="w-full bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/10 transition-all duration-500 ease-in-out">
        {/* Email */}
        <Text className="text-white mb-2 text-sm font-medium">Email</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#d1d5db"
          className="bg-white/20 text-white px-4 py-3 rounded-lg mb-5 border border-white/10 focus:border-yellow-400 transition-all duration-300"
        />

        {/* Password */}
        <Text className="text-white mb-2 text-sm font-medium">Password</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#d1d5db"
          secureTextEntry
          className="bg-white/20 text-white px-4 py-3 rounded-lg mb-8 border border-white/10 focus:border-yellow-400 transition-all duration-300"
        />

        {/* Login Button */}
        <TouchableOpacity className="bg-yellow-400 py-3 rounded-lg shadow-lg active:scale-95 transition-all duration-200">
          <Text className="text-center text-black font-bold text-lg">
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text className="text-gray-300 mt-8 text-sm">
        Don’t have an account?{" "}
        <Text className="text-yellow-400 font-semibold">Sign Up</Text>
      </Text>
    </View>
  );
}