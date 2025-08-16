import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MapPin, Camera } from "phosphor-react-native";

export default function ReportPothole() {
  return (
    <View className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 justify-center">
      <Text className="text-4xl font-extrabold text-center mb-10 text-white">
        Report a Pothole
      </Text>

      {/* Glassmorphic Card */}
      <View className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md">
        {/* Location Input */}
        <View className="flex-row items-center bg-white/20 rounded-xl px-4 mb-4">
          <MapPin size={22} color="white" />
          <TextInput
            placeholder="Enter Location"
            placeholderTextColor="#d1d5db"
            className="flex-1 px-3 py-3 text-white"
          />
        </View>

        {/* Description Input */}
        <TextInput
          placeholder="Describe the pothole..."
          placeholderTextColor="#d1d5db"
          multiline
          numberOfLines={4}
          className="bg-white/20 text-white px-4 py-3 rounded-xl mb-4"
        />

        {/* Upload/Camera Button */}
        <TouchableOpacity className="flex-row items-center justify-center bg-yellow-400  rounded-xl py-4 rounded-xl mb-6 shadow-md">
          <Camera size={22} color="white" />
          <Text className="text-black font-bold text-lg ml-2">Upload Photo</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 rounded-xl shadow-lg">
          <Text className="text-white text-center font-bold text-lg">
            Submit Report
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text className="text-gray-400 text-center mt-8 text-sm">
        Your report helps make roads safer 🚧
      </Text>
    </View>
  );
}
