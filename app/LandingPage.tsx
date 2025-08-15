import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Camera, MapPin } from "phosphor-react-native"; // make sure you installed: npm i phosphor-react-native
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
<ScrollView className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-12">
        <View className="flex-row items-center space-x-2">
          <View className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl items-center justify-center">
            <Camera size={28} color="white" />
          </View>
          <Text className="text-2xl font-bold text-white">PotholeAI</Text>
        </View>

        <TouchableOpacity
          className="bg-white/20 px-5 py-2 rounded-full"
          onPress={() => router.push("/Login")}
        >
          <Text className="text-white font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View className="items-center px-6 py-16">
        <Text className="text-5xl font-bold text-center text-white leading-tight">
          Smart Road{"\n"}
          <Text className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Monitoring
          </Text>
        </Text>
        <Text className="text-lg text-gray-200 text-center mt-6">
          Detect, report, and track potholes with AI-powered precision.{"\n"}
          Making roads safer, one detection at a time.
        </Text>

        {/* Hero Buttons */}
        <View className="flex-row space-x-4 mt-10">
          <TouchableOpacity
            className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full shadow-lg"
            onPress={() => router.push("/ReportPothole")}
          >
            <Text className="text-white font-bold text-lg">Start Detecting</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-2 border-white/30 px-6 py-3 rounded-full"
            onPress={() => router.push("/MapPage")}
          >
            <Text className="text-white font-bold text-lg">View Map</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Cards */}
      <View className="px-6 pb-16 space-y-6">
        <View className="bg-white/10 rounded-2xl p-6">
          <View className="w-12 h-12 bg-blue-500 rounded-xl items-center justify-center mb-4">
            <Camera size={24} color="white" />
          </View>
          <Text className="text-xl font-bold text-white mb-2">AI Detection</Text>
          <Text className="text-gray-300">
            Advanced computer vision to identify potholes instantly.
          </Text>
        </View>

        <View className="bg-white/10 rounded-2xl p-6">
          <View className="w-12 h-12 bg-green-500 rounded-xl items-center justify-center mb-4">
            <MapPin size={24} color="white" />
          </View>
          <Text className="text-xl font-bold text-white mb-2">GPS Tracking</Text>
          <Text className="text-gray-300">
            Precise location mapping for efficient road maintenance.
          </Text>
        </View>

        <View className="bg-white/10 rounded-2xl p-6">
          <Text className="text-xl font-bold text-white mb-2">Analytics</Text>
          <Text className="text-gray-300">
            Real-time insights and comprehensive reporting dashboard.
          </Text>
        </View>
      </View>

      {/* Stats Section */}
      <View className="border-t border-white/20 px-6 py-12 flex-row justify-between">
        <View className="items-center">
          <Text className="text-3xl font-bold text-orange-400">10K+</Text>
          <Text className="text-gray-300">Potholes Detected</Text>
        </View>
        <View className="items-center">
          <Text className="text-3xl font-bold text-green-400">500+</Text>
          <Text className="text-gray-300">Roads Improved</Text>
        </View>
        <View className="items-center">
          <Text className="text-3xl font-bold text-blue-400">95%</Text>
          <Text className="text-gray-300">Accuracy Rate</Text>
        </View>
      </View>
    </ScrollView>
  );
}
