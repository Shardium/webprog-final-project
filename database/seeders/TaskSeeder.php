<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Task::factory()->create([
            'name' => "Shorter Shower",
            'description' => "Take a shower for 10 minutes or less today.",
            'type' => "daily",
            'reward_yield' => 20
        ]);

        Task::factory()->create([
            'name' => "Drink from Reusable Water Bottle",
            'description' => "Use a reusable water bottle instead of buying bottled water.",
            'type' => "daily",
            'reward_yield' => 15
        ]);

        Task::factory()->create([
            'name' => "Turn Off Tap",
            'description' => "Turn off the tap while brushing your teeth.",
            'type' => "daily",
            'reward_yield' => 8
        ]);

        Task::factory()->create([
            'name' => "Water Plants Smartly",
            'description' => "Water plants in the morning or evening to reduce water evaporation.",
            'type' => "daily",
            'reward_yield' => 12
        ]);

        Task::factory()->create([
            'name' => "Educate Others",
            'description' => "Share water-saving tips with friends or family.",
            'type' => "weekly",
            'reward_yield' => 100
        ]);

        Task::factory()->create([
            'name' => "Efficient Washing",
            'description' => "Run the washing machine and dishwasher only with full loads.",
            'type' => "weekly",
            'reward_yield' => 120
        ]);

        Task::factory()->create([
            'name' => "Check for Leaks",
            'description' => "Check taps, showerheads, and toilets at home for leaks this week.",
            'type' => "weekly",
            'reward_yield' => 110
        ]);

        Task::factory()->create([
            'name' => "Rainwater Reuse",
            'description' => "Collect and reuse rainwater for plants or cleaning at least once this week.",
            'type' => "weekly",
            'reward_yield' => 150
        ]);


        // Task::factory()->count(10)->create()
    }
}
