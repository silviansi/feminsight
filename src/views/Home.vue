<template>
    <div class="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-white">
        <!-- Dekorasi Lingkaran -->
        <div class="absolute top-10 right-20 w-56 h-56 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>
  
        <!-- Konten -->
        <div class="relative z-10 text-center">
            <h1 class="text-4xl font-bold text-pink-600">One Step Solution</h1>
            <p class="text-lg text-gray-600">for all your dietary needs.</p>
    
            <!-- Search Bar -->
            <div class="mt-5 flex items-center bg-white rounded-full shadow-lg px-5 py-3 w-96">
            <input type="text" placeholder="Search your product" class="w-full outline-none bg-transparent text-gray-600">
            <button class="ml-2 p-2 bg-blue-500 text-white rounded-full">
                🔍
            </button>
            </div>
        </div>
    </div>
</template>  