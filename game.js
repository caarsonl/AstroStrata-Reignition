// ==========================================
// ASTROSTRATA: REIGNITION - COMPLETE ENGINE
// ==========================================

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const TILE_SIZE = 32;
const WORLD_WIDTH = 110;
const WORLD_HEIGHT = 160;
const FPS = 60;
const SAVES_KEY = "astrostrata_saves_v1";

const LIGHT_SCALE = 4;
const LIGHT_W = Math.floor(SCREEN_WIDTH / LIGHT_SCALE);
const LIGHT_H = Math.floor(SCREEN_HEIGHT / LIGHT_SCALE);

// Palette Constants
const COLOR_BLACK = "#0a0a0f";
const COLOR_WHITE = "#f5f5fa";
const COLOR_GOLD = "#ffd700";
const COLOR_CYAN = "#5adcff";
const COLOR_EXP = "#78e650";
const COLOR_HP = "#eb3c3c";
const COLOR_HEAT = "#ff5f1e";
const COLOR_PRESSURE = "#b450f0";
const COLOR_BG_DARK = "#10121a";

// Strata Depth Boundaries (tile rows)
const CRUST_SURFACE = 28;
const CRUST_BOTTOM = 54;
const UPPER_MANTLE_BOTTOM = 85;
const LOWER_MANTLE_BOTTOM = 115;
const OUTER_CORE_BOTTOM = 140;
const INNER_CORE_BOTTOM = WORLD_HEIGHT;

// ==========================================
// TILE & BLOCK IDENTIFIERS
// ==========================================
const AIR = 0;
const DIRT = 1;
const GRASS = 2;
const STONE = 3;
const COAL_ORE = 4;
const IRON_ORE = 5;
const GOLD_ORE = 6;
const WOOD = 7;
const LEAVES = 8;
const PLANKS = 9;
const TORCH = 10;
const WORKBENCH = 11;
const PERIDOTITE = 12;
const BASALT = 13;
const OBSIDIAN = 14;
const MAGMA_STONE = 15;
const MOLTEN_CORE = 16;
const INNER_CORE_METAL = 17;
const CORE_CRYSTAL = 18;
const LAVA = 19;
const FURNACE = 20;
const STONE_BRICKS = 21;
const BASALT_BRICKS = 22;
const GLASS = 23;
const LANTERN = 24;
const BOOKSHELF = 25;
const IRON_BARS = 26;
const DIAMOND_ORE = 27;
const LAUNCHPAD = 28;
const ASSEMBLER = 29;
const PARTICLE_COLLIDER = 30;

const MOON_REGOLITH = 31;
const HELIUM3_ORE = 32;
const MARTIAN_SOIL = 33;
const TITANIUM_ORE = 34;
const VENUS_ACID_STONE = 35;
const SULFUR_ORE = 36;
const SOLAR_BASALT = 37;
const CINNABAR_ORE = 38;
const EUROPA_ICE = 39;
const LITHIUM_BRINE_ORE = 40;
const TITAN_METHANE_CRUST = 41;
const HYDROCARBON_ORE = 42;
const IO_BRIMSTONE = 43;
const PYROCLASTIC_ORE = 44;
const ENCELADUS_CRUST = 45;
const DEUTERIUM_ORE = 46;
const CERES_MATRIX = 47;
const PALLADIUM_ORE = 48;
const TRITON_NITROGEN_ICE = 49;
const NEODYMIUM_ORE = 50;
const PLUTO_THOLIN_STONE = 51;
const DARK_MATTER_ORE = 52;
const SEDNA_OORT_SLATE = 53;
const TACHYON_ORE = 54;
const PROXIMA_STELLAR_STONE = 55;
const ANTIMATTER_ORE = 56;
const GLIESE_CHRONO_ROCK = 57;
const CHRONOS_ORE = 58;
const OMEGA_SINGULARITY_MATRIX = 59;
const SINGULARITY_ORE = 60;

const STONE_PILLAR = 61;
const MARBLE_BLOCK = 62;
const NEON_LAMP = 63;
const TECH_PLATING = 64;
const WOOD_TABLE = 65;
const WOOD_CHAIR = 66;
const CRYSTAL_GLASS = 67;
const CHEST = 68;

const TIER_NAMES = {
  0: "Hand / Any",
  1: "Wood Tier",
  2: "Stone Tier",
  3: "Iron Tier",
  4: "Diamond/Obsidian Tier",
  5: "Core Tech / Cosmic Tier"
};

const BLOCK_DATA = {
  [CHEST]: { name: "Loot Chest", hardness: 1.5, mohs: 2.5, color: "#a56e2d", drop: CHEST, req_tier: 0, req_tool: "Axe", desc: "Subterranean cache with survival supplies." },
  [DIRT]: { name: "Dirt", hardness: 0.8, mohs: 1.5, color: "#734b2d", drop: DIRT, req_tier: 0, req_tool: "Shovel", desc: "Soft, cohesive organic topsoil." },
  [GRASS]: { name: "Grass Block", hardness: 0.8, mohs: 1.5, color: "#4b9128", drop: DIRT, req_tier: 0, req_tool: "Shovel", desc: "Root-bound surface humus layer." },
  [STONE]: { name: "Crust Stone", hardness: 2.2, mohs: 5.5, color: "#787880", drop: STONE, req_tier: 1, req_tool: "Pickaxe", desc: "Brittle continental granitic bedrock." },
  [COAL_ORE]: { name: "Coal Ore", hardness: 2.6, mohs: 3.0, color: "#28282d", drop: "Coal", req_tier: 1, req_tool: "Pickaxe", desc: "Compressed carbon fuel matrix.", xp: 12 },
  [IRON_ORE]: { name: "Iron Ore", hardness: 3.2, mohs: 5.5, color: "#b98769", drop: "Iron Ore", req_tier: 2, req_tool: "Pickaxe", desc: "Dense banded iron formation.", xp: 20 },
  [GOLD_ORE]: { name: "Gold Ore", hardness: 3.8, mohs: 4.5, color: "#e6c328", drop: "Gold Ore", req_tier: 3, req_tool: "Pickaxe", desc: "Heavy auriferous quartz vein.", xp: 35 },
  [DIAMOND_ORE]: { name: "Diamond Ore", hardness: 5.5, mohs: 10.0, color: "#50e1ff", drop: "Diamond", req_tier: 3, req_tool: "Pickaxe", desc: "Kimberlite diamond crystallization.", xp: 80 },
  [WOOD]: { name: "Wood Log", hardness: 1.4, mohs: 2.5, color: "#825532", drop: WOOD, req_tier: 0, req_tool: "Axe", desc: "Combustible timber. Burns near lava!" },
  [LEAVES]: { name: "Leaves", hardness: 0.3, mohs: 1.0, color: "#289632", drop: null, req_tier: 0, req_tool: "Any", desc: "Soft solar-capture canopy." },
  [PLANKS]: { name: "Wood Planks", hardness: 1.2, mohs: 2.5, color: "#af7d46", drop: PLANKS, req_tier: 0, req_tool: "Axe", desc: "Processed lumber." },
  [TORCH]: { name: "Torch", hardness: 0.1, mohs: 1.0, color: "#ffb428", drop: TORCH, req_tier: 0, req_tool: "Any", desc: "Illuminates dark caverns.", light: 140 },
  [WORKBENCH]: { name: "Workbench", hardness: 1.6, mohs: 2.5, color: "#966437", drop: WORKBENCH, req_tier: 0, req_tool: "Axe", desc: "Workshop station for tools & gear." },
  [FURNACE]: { name: "Stone Furnace", hardness: 2.4, mohs: 5.5, color: "#64646e", drop: FURNACE, req_tier: 2, req_tool: "Pickaxe", desc: "Thermal forge station for smelting.", light: 110 },
  [STONE_BRICKS]: { name: "Stone Bricks", hardness: 2.5, mohs: 5.5, color: "#828287", drop: STONE_BRICKS, req_tier: 1, req_tool: "Pickaxe", desc: "Chiseled load-bearing masonry." },
  [BASALT_BRICKS]: { name: "Basalt Bricks", hardness: 4.6, mohs: 6.5, color: "#32323c", drop: BASALT_BRICKS, req_tier: 3, req_tool: "Pickaxe", desc: "Sintered volcanic paving stones." },
  [GLASS]: { name: "Glass Block", hardness: 0.5, mohs: 5.5, color: "#afe1f0", drop: null, req_tier: 0, req_tool: "Any", desc: "Transparent silica window." },
  [LANTERN]: { name: "Hanging Lantern", hardness: 0.6, mohs: 5.0, color: "#ffcd4b", drop: LANTERN, req_tier: 3, req_tool: "Pickaxe", desc: "Forged iron illuminating armature.", light: 160 },
  [BOOKSHELF]: { name: "Oak Bookshelf", hardness: 1.5, mohs: 2.5, color: "#8c5a37", drop: BOOKSHELF, req_tier: 0, req_tool: "Axe", desc: "Timber casing with research tomes." },
  [IRON_BARS]: { name: "Iron Bars", hardness: 3.0, mohs: 5.5, color: "#aaafbe", drop: IRON_BARS, req_tier: 2, req_tool: "Pickaxe", desc: "Ductile forged security lattice." },
  [PERIDOTITE]: { name: "Peridotite", hardness: 4.2, mohs: 6.5, color: "#415f3c", drop: PERIDOTITE, req_tier: 3, req_tool: "Pickaxe", desc: "Dense Upper Mantle rock.", xp: 25 },
  [BASALT]: { name: "Dense Basalt", hardness: 4.8, mohs: 6.0, color: "#2d2d37", drop: BASALT, req_tier: 3, req_tool: "Pickaxe", desc: "Aphanitic volcanic rock.", xp: 30 },
  [OBSIDIAN]: { name: "Mantle Obsidian", hardness: 6.5, mohs: 6.0, color: "#1c1428", drop: "Obsidian", req_tier: 4, req_tool: "Pickaxe", desc: "Conchoidal volcanic glass.", xp: 60 },
  [MAGMA_STONE]: { name: "Magma Stone", hardness: 5.2, mohs: 7.0, color: "#9b3719", drop: MAGMA_STONE, req_tier: 4, req_tool: "Pickaxe", desc: "Superheated Lower Mantle block.", xp: 45, light: 70 },
  [MOLTEN_CORE]: { name: "Molten Iron Slag", hardness: 6.8, mohs: 7.5, color: "#eb6914", drop: "Liquid Iron", req_tier: 5, req_tool: "Drill", desc: "Superpressured molten metal.", xp: 80, light: 120 },
  [INNER_CORE_METAL]: { name: "Solid Core Alloy", hardness: 8.5, mohs: 8.5, color: "#e1e1f5", drop: "Core Metal", req_tier: 5, req_tool: "Drill", desc: "Crystalline iron-nickel under 330 GPa.", xp: 140, light: 80 },
  [CORE_CRYSTAL]: { name: "Inner Core Shard", hardness: 10.0, mohs: 9.5, color: "#fff096", drop: "Core Shard", req_tier: 5, req_tool: "Drill", desc: "Harmonic energy crystal from Earth's core.", xp: 250, light: 150 },
  [LAVA]: { name: "Liquid Lava", hardness: 999, mohs: 0.0, color: "#ff550a", drop: null, req_tier: 0, req_tool: "Bucket", desc: "Viscous molten silicate melt.", light: 145, liquid: true },

  [LAUNCHPAD]: { name: "Aerospace Launchpad", hardness: 4.0, mohs: 6.5, color: "#4b5064", drop: LAUNCHPAD, req_tier: 3, req_tool: "Pickaxe", desc: "Station for assembling & launching Rockets Tier 1-15.", light: 100 },
  [ASSEMBLER]: { name: "Circuit Assembler", hardness: 3.0, mohs: 5.5, color: "#237387", drop: ASSEMBLER, req_tier: 2, req_tool: "Pickaxe", desc: "Precision fabricator for advanced electronics." },
  [PARTICLE_COLLIDER]: { name: "Particle Collider", hardness: 6.0, mohs: 7.5, color: "#9632d2", drop: PARTICLE_COLLIDER, req_tier: 4, req_tool: "Pickaxe", desc: "Synchrotron for antimatter synthesis.", light: 130 },

  [STONE_PILLAR]: { name: "Stone Pillar", hardness: 2.2, mohs: 5.5, color: "#a0a0a8", drop: STONE_PILLAR, req_tier: 1, req_tool: "Pickaxe", desc: "Classical architectural pillar." },
  [MARBLE_BLOCK]: { name: "Marble Block", hardness: 2.0, mohs: 4.5, color: "#ebf0f5", drop: MARBLE_BLOCK, req_tier: 1, req_tool: "Pickaxe", desc: "Pristine calcitic metamorphic rock." },
  [NEON_LAMP]: { name: "Neon Cyber-Lamp", hardness: 0.8, mohs: 3.0, color: "#50ffdc", drop: NEON_LAMP, req_tier: 1, req_tool: "Any", desc: "High-efficiency luminary.", light: 180 },
  [TECH_PLATING]: { name: "Hull Plating", hardness: 4.5, mohs: 6.5, color: "#373c4b", drop: TECH_PLATING, req_tier: 3, req_tool: "Pickaxe", desc: "Corrosion-resistant titanium alloy plate." },
  [WOOD_TABLE]: { name: "Oak Dining Table", hardness: 1.2, mohs: 2.5, color: "#9b6941", drop: WOOD_TABLE, req_tier: 0, req_tool: "Axe", desc: "Rustic domestic timber table." },
  [WOOD_CHAIR]: { name: "Oak Chair", hardness: 0.9, mohs: 2.5, color: "#915f37", drop: WOOD_CHAIR, req_tier: 0, req_tool: "Axe", desc: "Sturdy carved wooden chair." },
  [CRYSTAL_GLASS]: { name: "Crystal Glass", hardness: 1.2, mohs: 6.5, color: "#bef0ff", drop: CRYSTAL_GLASS, req_tier: 1, req_tool: "Pickaxe", desc: "Diamond-reinforced blast glass." }
};

const PLANET_DATA = {
  "Earth": { tier: 0, name: "Earth", gravity: 0.42, sky_color: "#87c3f5", hazard: "None", req_rocket: null, base_block: STONE, surface_block: GRASS, ore_block: COAL_ORE, desc: "Cradle of humanity." },
  "Moon": { tier: 1, name: "Luna", gravity: 0.16, sky_color: "#0a0a12", hazard: "Vacuum (Low Oxygen)", req_rocket: "Tier 1 Rocket", base_block: MOON_REGOLITH, surface_block: MOON_REGOLITH, ore_block: HELIUM3_ORE, desc: "Airless satellite rich in Helium-3." },
  "Mars": { tier: 2, name: "Mars", gravity: 0.28, sky_color: "#be6e4b", hazard: "Dust Storms", req_rocket: "Tier 2 Rocket", base_block: MARTIAN_SOIL, surface_block: MARTIAN_SOIL, ore_block: TITANIUM_ORE, desc: "Red planet with abundant titanium." },
  "Venus": { tier: 3, name: "Venus", gravity: 0.38, sky_color: "#b4a550", hazard: "Acid Corrosion", req_rocket: "Tier 3 Rocket", base_block: VENUS_ACID_STONE, surface_block: VENUS_ACID_STONE, ore_block: SULFUR_ORE, desc: "Supercritical atmosphere with sulfur deposits." },
  "Mercury": { tier: 4, name: "Mercury", gravity: 0.26, sky_color: "#19141e", hazard: "Solar Radiation", req_rocket: "Tier 4 Rocket", base_block: SOLAR_BASALT, surface_block: SOLAR_BASALT, ore_block: CINNABAR_ORE, desc: "Blistering solar proximity with cinnabar veins." },
  "Europa": { tier: 5, name: "Europa", gravity: 0.22, sky_color: "#14233c", hazard: "Cryogenic Cold", req_rocket: "Tier 5 Rocket", base_block: EUROPA_ICE, surface_block: EUROPA_ICE, ore_block: LITHIUM_BRINE_ORE, desc: "Jovian moon with lithium brine." },
  "Titan": { tier: 6, name: "Titan", gravity: 0.24, sky_color: "#a0823c", hazard: "Toxic Methane", req_rocket: "Tier 6 Rocket", base_block: TITAN_METHANE_CRUST, surface_block: TITAN_METHANE_CRUST, ore_block: HYDROCARBON_ORE, desc: "Saturnian moon of hydrocarbon polymers." },
  "Io": { tier: 7, name: "Io", gravity: 0.30, sky_color: "#8c501e", hazard: "Volcanic Eruptions", req_rocket: "Tier 7 Rocket", base_block: IO_BRIMSTONE, surface_block: IO_BRIMSTONE, ore_block: PYROCLASTIC_ORE, desc: "Volcanic world of pyroclastic ores." },
  "Enceladus": { tier: 8, name: "Enceladus", gravity: 0.14, sky_color: "#1e2d46", hazard: "Cryo Geysers", req_rocket: "Tier 8 Rocket", base_block: ENCELADUS_CRUST, surface_block: ENCELADUS_CRUST, ore_block: DEUTERIUM_ORE, desc: "Ice moon with pure deuterium crystals." },
  "Ceres": { tier: 9, name: "Ceres", gravity: 0.12, sky_color: "#0f0f16", hazard: "Microgravity", req_rocket: "Tier 9 Rocket", base_block: CERES_MATRIX, surface_block: CERES_MATRIX, ore_block: PALLADIUM_ORE, desc: "Asteroid Belt dwarf world rich in palladium." },
  "Triton": { tier: 10, name: "Triton", gravity: 0.20, sky_color: "#192841", hazard: "Nitrogen Geysers", req_rocket: "Tier 10 Rocket", base_block: TRITON_NITROGEN_ICE, surface_block: TRITON_NITROGEN_ICE, ore_block: NEODYMIUM_ORE, desc: "Cryogenic retrograde moon with neodymium." },
  "Pluto": { tier: 11, name: "Pluto", gravity: 0.15, sky_color: "#120c19", hazard: "Cosmic Freeze", req_rocket: "Tier 11 Rocket", base_block: PLUTO_THOLIN_STONE, surface_block: PLUTO_THOLIN_STONE, ore_block: DARK_MATTER_ORE, desc: "Kuiper belt world yielding dark matter." },
  "Sedna": { tier: 12, name: "Sedna", gravity: 0.12, sky_color: "#160a14", hazard: "Vacuum Dispersion", req_rocket: "Tier 12 Rocket", base_block: SEDNA_OORT_SLATE, surface_block: SEDNA_OORT_SLATE, ore_block: TACHYON_ORE, desc: "Distant red body holding tachyon crystals." },
  "Proxima b": { tier: 13, name: "Proxima b", gravity: 0.44, sky_color: "#6e191e", hazard: "Stellar Flares", req_rocket: "Tier 13 Rocket", base_block: PROXIMA_STELLAR_STONE, surface_block: PROXIMA_STELLAR_STONE, ore_block: ANTIMATTER_ORE, desc: "Extrasolar planet with antimatter geodes." },
  "Gliese 581g": { tier: 14, name: "Gliese 581g", gravity: 0.48, sky_color: "#2d1e50", hazard: "Tidal Distortion", req_rocket: "Tier 14 Rocket", base_block: GLIESE_CHRONO_ROCK, surface_block: GLIESE_CHRONO_ROCK, ore_block: CHRONOS_ORE, desc: "Tidally locked super-Earth with chronos crystals." },
  "Omega Prime": { tier: 15, name: "Omega Prime", gravity: 0.55, sky_color: "#0f1e32", hazard: "Gravitational Crush", req_rocket: "Tier 15 Rocket", base_block: OMEGA_SINGULARITY_MATRIX, surface_block: OMEGA_SINGULARITY_MATRIX, ore_block: SINGULARITY_ORE, desc: "The galaxy's edge. Micro-singularity cores." }
};

const PLANET_ORDER = [
  "Earth", "Moon", "Mars", "Venus", "Mercury", "Europa", "Titan",
  "Io", "Enceladus", "Ceres", "Triton", "Pluto", "Sedna",
  "Proxima b", "Gliese 581g", "Omega Prime"
];

const CLASSES = {
  "Warrior": { hp: 150, dmg: 18, speed: 4.4, mine_speed: 1.0, color: "#d23c3c", weapon: "Greatsword" },
  "Mage": { hp: 95, dmg: 26, speed: 4.1, mine_speed: 1.0, color: "#4682f0", weapon: "Plasma Wand" },
  "Ranger": { hp: 115, dmg: 16, speed: 5.2, mine_speed: 1.1, color: "#32c35f", weapon: "Recurve Bow" },
  "Miner": { hp: 130, dmg: 14, speed: 4.3, mine_speed: 1.8, color: "#e6a01e", weapon: "Core Drill" }
};

const ITEM_DEFINITIONS = {
  "Wood Sword": { type: "weapon", dmg: 8, desc: "Carved wooden blade. 8 damage." },
  "Stone Sword": { type: "weapon", dmg: 12, desc: "Granite broadsword. 12 damage." },
  "Iron Dagger": { type: "weapon", dmg: 14, speed: 12, desc: "Swift stabbing blade. High attack speed." },
  "Iron Sword": { type: "weapon", dmg: 18, desc: "Tempered steel blade. 18 damage." },
  "Iron Halberd": { type: "weapon", dmg: 22, reach: 58, desc: "Long thrust polearm. Great reach." },
  "Gold Sword": { type: "weapon", dmg: 24, desc: "Gilded royal longsword. 24 damage." },
  "Obsidian Blade": { type: "weapon", dmg: 28, desc: "Vitreous obsidian cleaver. 28 damage." },
  "Diamond Blade": { type: "weapon", dmg: 34, desc: "Flawless diamond broadsword. 34 damage." },
  "Core Blade": { type: "weapon", dmg: 42, desc: "Crystalline Inner Core Greatsword. 42 damage." },
  "Core Hammer": { type: "weapon", dmg: 48, tool_type: "hammer", tier: 5, mult: 2.2, desc: "Tier 5: Crushing seismic hammer. 48 dmg." },
  "Titanium Battleaxe": { type: "weapon", dmg: 50, desc: "Heavy Martian dual-bladed war axe." },
  "Magma Claymore": { type: "weapon", dmg: 58, desc: "Infused with Ionian pyroclastic heat. Blasts targets." },
  "Dark Matter Blade": { type: "weapon", dmg: 85, desc: "Plutonian blade that tears molecular bonds." },
  "Infinity Singularity Blade": { type: "weapon", dmg: 220, desc: "The apex weapon of Omega Prime. Reality rending." },

  "Wood Shortbow": { type: "ranged", dmg: 10, desc: "Handcrafted bow. Fires arrows." },
  "Iron Crossbow": { type: "ranged", dmg: 20, desc: "Mechanical iron crossbow. High velocity." },
  "Titanium Repeater": { type: "ranged", dmg: 45, desc: "Rapid-fire aerospace alloy repeater." },
  "Thermal Pulse Rifle": { type: "ranged", dmg: 65, desc: "Ionian geothermal thermal-beam launcher." },
  "Tachyon Bow": { type: "ranged", dmg: 110, desc: "Sednan bow firing faster-than-light beams." },
  "Antimatter Annihilator": { type: "ranged", dmg: 150, desc: "Proximan cataclysmic anti-proton blaster." },
  "Arcane Flame Wand": { type: "magic", dmg: 16, desc: "Fires fiery seeking magic sparks." },
  "Frost Scepter": { type: "magic", dmg: 30, desc: "Europan cryo-energy bolt projector." },
  "Helium Plasma Wand": { type: "magic", dmg: 52, desc: "Lunar fusion-charged arcane caster." },

  "Wood Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 1, mult: 1.3, desc: "Tier 1: 1.3x speed on Stone & Coal." },
  "Wood Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 1.4, desc: "Tier 0: 1.4x wood speed." },
  "Wood Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 1.6, desc: "Tier 0: 1.6x dirt speed." },

  "Stone Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 2, mult: 1.8, desc: "Tier 2: 1.8x speed. Cracks Iron Ore." },
  "Stone Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 2.1, desc: "Tier 0: 2.1x wood speed." },
  "Stone Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 2.4, desc: "Tier 0: 2.4x dirt speed." },

  "Iron Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 3, mult: 2.6, desc: "Tier 3: 2.6x speed. Gold, Diamond & Basalt." },
  "Iron Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 3.0, desc: "Tier 0: 3.0x wood speed." },
  "Iron Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 3.4, desc: "Tier 0: 3.4x dirt speed." },

  "Gold Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 3, mult: 3.6, desc: "Tier 3: 3.6x speed. Fast but soft." },
  "Obsidian Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 3.0, desc: "Tier 4: 3.0x speed. Obsidian & Magma Stone." },
  "Diamond Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 4.4, desc: "Tier 4: 4.4x speed. Kimberlite pick." },
  "Titanium Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 5.2, desc: "Tier 4: 5.2x speed. Aerospace alloy." },
  "Cryo Breaker": { type: "tool", tool_type: "pickaxe", tier: 5, mult: 6.0, desc: "Tier 5: 6.0x speed. Ultrasonic pick." },
  "Core Drill": { type: "tool", tool_type: "drill", tier: 5, mult: 7.5, desc: "Tier 5: 7.5x speed. Ultra-pressure drill." },

  "Dynamite": { type: "explosive", desc: "High explosive stick. Blasts 3x3 tiles on click." },
  "Prospecting Scanner": { type: "scanner", desc: "Geological pulse detector. Pings ore veins within 14 tiles." },
  "Oxygen Tank": { type: "accessory", desc: "Provides life support. Negates vacuum asphyxiation." },
  "Gravity Stabilizer": { type: "accessory", desc: "Gravimetric gyro. Normalizes planetary gravity to 1.0g." },
  "Mining Charm": { type: "accessory", desc: "Ancient tectonic talisman. Grants +35% mining speed." },

  "Iron Helmet": { type: "armor", slot: "helmet", defense: 4, desc: "Hardened iron headgear. +4 Defense." },
  "Thermal Suit": { type: "armor", slot: "chest", defense: 8, desc: "Nullifies Lower Mantle heat. +8 Defense." },
  "Acid-Resistant Suit": { type: "armor", slot: "chest", defense: 14, desc: "Venusian fluoropolymer suit. Immune to acid & heat." },
  "Core Exosuit": { type: "armor", slot: "chest", defense: 24, desc: "Withstands 330+ GPa pressure & molten slag." },
  "Core Striders": { type: "armor", slot: "boots", defense: 6, desc: "Reinforced boots. +6 Defense & Lava Mobility." },

  "Health Potion": { type: "consumable", heal: 50, desc: "Restores 50 HP immediately." },
  "Swiftness Elixir": { type: "consumable", buff: "speed", desc: "Increases sprint velocity by 50% for 30s." },
  "Hyper-Shield Flask": { type: "consumable", heal: 120, desc: "Nanotech emergency repair. Heals 120 HP." },

  "Planetary Dynamo": { type: "victory", desc: "THE REIGNITION CORE! Restores Earth's magnetic dynamo and saves humanity!" },
  "Micro Circuit": { type: "material", desc: "Printed semiconductor board for avionics and computers." },
  "Quantum Processor": { type: "material", desc: "Superconducting quantum computing matrix." },
  "Warp Drive Coil": { type: "material", desc: "Spacetime-distorting magnetic confinement coil." },
  "Iron Ingot": { type: "material", desc: "Refined ferric bar smelted from iron ore." },
  "Gold Ingot": { type: "material", desc: "Gleaming pure gold bullion." },
  "Titanium Ingot": { type: "material", desc: "High-tensile rocket hull plating ingot." },
  "Coal": { type: "material", desc: "Fossilized combustible fuel for torches & furnaces." },
  "Iron Ore": { type: "material", desc: "Raw unrefined ferric mineral." },
  "Gold Ore": { type: "material", desc: "Valuable conductive metallic element." },
  "Diamond": { type: "material", desc: "Ultra-hard tetrahedral diamond crystal." },
  "Obsidian": { type: "material", desc: "Extremely hard vitrified silicate." },
  "Core Metal": { type: "material", desc: "Inner core crystalline iron-nickel alloy." },
  "Core Shard": { type: "material", desc: "Harmonic energy crystal from Earth's center." },

  "Helium-3": { type: "material", desc: "Lunar fusion propellant isotope." },
  "Titanium Ore": { type: "material", desc: "Martian aerospace refractory metal ore." },
  "Sulfur": { type: "material", desc: "Venusian hyper-reactive chemical reagent." },
  "Cinnabar": { type: "material", desc: "Hermian thermal superconductor crystal." },
  "Lithium Brine": { type: "material", desc: "Europan high-capacity battery electrolyte." },
  "Hydrocarbon": { type: "material", desc: "Titanian high-efficiency polymer fluid." },
  "Pyroclastic Ore": { type: "material", desc: "Ionian super-dense volcanic geothermal core." },
  "Deuterium": { type: "material", desc: "Enceladan heavy fusion propellant." },
  "Palladium": { type: "material", desc: "Cerean catalytic shielding metal." },
  "Neodymium": { type: "material", desc: "Tritonian hyper-flux magnetic mineral." },
  "Dark Matter": { type: "material", desc: "Plutonian gravitational anomaly essence." },
  "Tachyon Shard": { type: "material", desc: "Sednan superluminal faster-than-light crystal." },
  "Antimatter": { type: "material", desc: "Proximan relativistic matter-annihilation cluster." },
  "Chronos Crystal": { type: "material", desc: "Gliesian entropy-reversing temporal shard." },
  "Singularity Core": { type: "material", desc: "Omega Prime micro-blackhole engine core." }
};

for (let t = 1; t <= 15; t++) {
  ITEM_DEFINITIONS[`Tier ${t} Rocket`] = {
    type: "rocket",
    dest: PLANET_ORDER[t],
    tier: t,
    desc: `Tier ${t} Interplanetary Vessel. Travels to ${PLANET_ORDER[t]}.`
  };
}

const RECIPES = [
  { result: CHEST, count: 1, req: { [PLANKS]: 8 }, station: "workbench" },
  { result: PLANKS, count: 4, req: { [WOOD]: 1 }, station: "hand" },
  { result: TORCH, count: 4, req: { [WOOD]: 1, "Coal": 1 }, station: "hand" },
  { result: WORKBENCH, count: 1, req: { [PLANKS]: 4 }, station: "hand" },
  { result: FURNACE, count: 1, req: { [STONE]: 8, "Coal": 2 }, station: "hand" },
  { result: "Wood Pickaxe", count: 1, req: { [PLANKS]: 4 }, station: "hand" },
  { result: "Wood Axe", count: 1, req: { [PLANKS]: 3 }, station: "hand" },
  { result: "Wood Shovel", count: 1, req: { [PLANKS]: 2 }, station: "hand" },
  { result: "Wood Sword", count: 1, req: { [PLANKS]: 3 }, station: "hand" },
  { result: "Wood Shortbow", count: 1, req: { [PLANKS]: 4, "Coal": 1 }, station: "hand" },
  { result: "Stone Pickaxe", count: 1, req: { [STONE]: 4, [PLANKS]: 2 }, station: "hand" },
  { result: "Stone Axe", count: 1, req: { [STONE]: 3, [PLANKS]: 2 }, station: "hand" },
  { result: "Stone Shovel", count: 1, req: { [STONE]: 2, [PLANKS]: 2 }, station: "hand" },
  { result: "Stone Sword", count: 1, req: { [STONE]: 3, [PLANKS]: 2 }, station: "hand" },
  { result: "Dynamite", count: 2, req: { "Coal": 2, [STONE]: 4 }, station: "hand" },

  { result: "Iron Ingot", count: 1, req: { "Iron Ore": 1, "Coal": 1 }, station: "furnace" },
  { result: "Gold Ingot", count: 1, req: { "Gold Ore": 1, "Coal": 1 }, station: "furnace" },
  { result: "Titanium Ingot", count: 1, req: { "Titanium Ore": 1, "Coal": 2 }, station: "furnace" },
  { result: GLASS, count: 2, req: { [STONE]: 2, "Coal": 1 }, station: "furnace" },

  { result: "Iron Pickaxe", count: 1, req: { "Iron Ingot": 3, [PLANKS]: 2 }, station: "workbench" },
  { result: "Iron Axe", count: 1, req: { "Iron Ingot": 3, [PLANKS]: 2 }, station: "workbench" },
  { result: "Iron Shovel", count: 1, req: { "Iron Ingot": 1, [PLANKS]: 2 }, station: "workbench" },
  { result: "Iron Sword", count: 1, req: { "Iron Ingot": 2, [PLANKS]: 1 }, station: "workbench" },
  { result: "Iron Dagger", count: 1, req: { "Iron Ingot": 1, [PLANKS]: 1 }, station: "workbench" },
  { result: "Iron Halberd", count: 1, req: { "Iron Ingot": 3, [PLANKS]: 3 }, station: "workbench" },
  { result: "Iron Crossbow", count: 1, req: { "Iron Ingot": 3, [PLANKS]: 2 }, station: "workbench" },
  { result: "Iron Helmet", count: 1, req: { "Iron Ingot": 5 }, station: "workbench" },
  { result: "Gold Pickaxe", count: 1, req: { "Gold Ingot": 3, [PLANKS]: 2 }, station: "workbench" },
  { result: "Gold Sword", count: 1, req: { "Gold Ingot": 2, [PLANKS]: 1 }, station: "workbench" },
  { result: "Obsidian Pickaxe", count: 1, req: { "Obsidian": 4, [PLANKS]: 2 }, station: "workbench" },
  { result: "Obsidian Blade", count: 1, req: { "Obsidian": 4, "Iron Ingot": 2 }, station: "workbench" },
  { result: "Diamond Pickaxe", count: 1, req: { "Diamond": 3, "Gold Ingot": 2 }, station: "workbench" },
  { result: "Diamond Blade", count: 1, req: { "Diamond": 2, "Gold Ingot": 1 }, station: "workbench" },
  { result: "Mining Charm", count: 1, req: { "Gold Ingot": 2, "Diamond": 1 }, station: "workbench" },
  { result: "Health Potion", count: 1, req: { [WOOD]: 1, "Coal": 1 }, station: "workbench" },

  { result: STONE_BRICKS, count: 4, req: { [STONE]: 4 }, station: "workbench" },
  { result: BASALT_BRICKS, count: 4, req: { [BASALT]: 4 }, station: "workbench" },
  { result: STONE_PILLAR, count: 2, req: { [STONE_BRICKS]: 2 }, station: "workbench" },
  { result: MARBLE_BLOCK, count: 4, req: { [STONE]: 4, [GLASS]: 1 }, station: "workbench" },
  { result: NEON_LAMP, count: 2, req: { [GLASS]: 2, "Gold Ingot": 1 }, station: "workbench" },
  { result: TECH_PLATING, count: 4, req: { "Iron Ingot": 2, "Titanium Ingot": 1 }, station: "workbench" },
  { result: WOOD_TABLE, count: 1, req: { [PLANKS]: 4 }, station: "workbench" },
  { result: WOOD_CHAIR, count: 2, req: { [PLANKS]: 3 }, station: "workbench" },
  { result: CRYSTAL_GLASS, count: 2, req: { [GLASS]: 2, "Diamond": 1 }, station: "workbench" },
  { result: LANTERN, count: 1, req: { "Iron Ingot": 1, [TORCH]: 1 }, station: "workbench" },
  { result: BOOKSHELF, count: 1, req: { [PLANKS]: 6 }, station: "workbench" },
  { result: IRON_BARS, count: 4, req: { "Iron Ingot": 2 }, station: "workbench" },

  { result: ASSEMBLER, count: 1, req: { "Iron Ingot": 6, "Gold Ingot": 2, [GLASS]: 2 }, station: "workbench" },
  { result: LAUNCHPAD, count: 1, req: { "Iron Ingot": 12, "Gold Ingot": 4, "Diamond": 2 }, station: "workbench" },
  { result: PARTICLE_COLLIDER, count: 1, req: { [INNER_CORE_METAL]: 8, "Dark Matter": 4, "Quantum Processor": 2 }, station: "assembler" },

  { result: "Micro Circuit", count: 2, req: { "Gold Ingot": 1, "Iron Ingot": 1, [GLASS]: 1 }, station: "assembler" },
  { result: "Quantum Processor", count: 1, req: { "Micro Circuit": 2, "Diamond": 1, "Helium-3": 2 }, station: "assembler" },
  { result: "Prospecting Scanner", count: 1, req: { "Micro Circuit": 1, "Iron Ingot": 2, [GLASS]: 1 }, station: "assembler" },
  { result: "Oxygen Tank", count: 1, req: { "Iron Ingot": 4, [GLASS]: 2, "Micro Circuit": 1 }, station: "assembler" },
  { result: "Gravity Stabilizer", count: 1, req: { "Quantum Processor": 1, "Titanium Ingot": 4 }, station: "assembler" },
  { result: "Arcane Flame Wand", count: 1, req: { "Gold Ingot": 3, "Coal": 4, "Micro Circuit": 1 }, station: "assembler" },
  { result: "Swiftness Elixir", count: 2, req: { "Lithium Brine": 1, "Health Potion": 2 }, station: "assembler" },
  { result: "Hyper-Shield Flask", count: 1, req: { "Helium-3": 2, "Health Potion": 2 }, station: "assembler" },

  { result: "Core Drill", count: 1, req: { [BASALT]: 8, "Iron Ingot": 6, "Diamond": 2 }, station: "workbench" },
  { result: "Thermal Suit", count: 1, req: { [BASALT]: 12, "Obsidian": 6 }, station: "workbench" },
  { result: "Core Striders", count: 1, req: { [BASALT]: 8, "Obsidian": 4 }, station: "workbench" },
  { result: "Core Exosuit", count: 1, req: { "Thermal Suit": 1, "Core Metal": 6, "Core Shard": 2 }, station: "workbench" },
  { result: "Core Blade", count: 1, req: { "Core Metal": 6, "Core Shard": 2 }, station: "workbench" },
  { result: "Core Hammer", count: 1, req: { "Core Metal": 6, "Core Shard": 2, [PLANKS]: 2 }, station: "workbench" },
  { result: "Planetary Dynamo", count: 1, req: { "Core Metal": 10, "Core Shard": 4, "Diamond": 4, "Obsidian": 8 }, station: "workbench" },

  { result: "Tier 1 Rocket", count: 1, req: { "Iron Ingot": 16, "Gold Ingot": 6, "Micro Circuit": 2 }, station: "launchpad" },
  { result: "Tier 2 Rocket", count: 1, req: { "Tier 1 Rocket": 1, "Helium-3": 8, "Iron Ingot": 12 }, station: "launchpad" },
  { result: "Tier 3 Rocket", count: 1, req: { "Tier 2 Rocket": 1, "Titanium Ingot": 10, "Micro Circuit": 4 }, station: "launchpad" },
  { result: "Tier 4 Rocket", count: 1, req: { "Tier 3 Rocket": 1, "Sulfur": 10, "Titanium Ingot": 8 }, station: "launchpad" },
  { result: "Tier 5 Rocket", count: 1, req: { "Tier 4 Rocket": 1, "Cinnabar": 8, "Quantum Processor": 1 }, station: "launchpad" },
  { result: "Tier 6 Rocket", count: 1, req: { "Tier 5 Rocket": 1, "Lithium Brine": 10, "Titanium Ingot": 12 }, station: "launchpad" },
  { result: "Tier 7 Rocket", count: 1, req: { "Tier 6 Rocket": 1, "Hydrocarbon": 12, "Quantum Processor": 2 }, station: "launchpad" },
  { result: "Tier 8 Rocket", count: 1, req: { "Tier 7 Rocket": 1, "Pyroclastic Ore": 8, "Obsidian": 8 }, station: "launchpad" },
  { result: "Tier 9 Rocket", count: 1, req: { "Tier 8 Rocket": 1, "Deuterium": 10, "Quantum Processor": 2 }, station: "launchpad" },
  { result: "Tier 10 Rocket", count: 1, req: { "Tier 9 Rocket": 1, "Palladium": 8, "Titanium Ingot": 14 }, station: "launchpad" },
  { result: "Tier 11 Rocket", count: 1, req: { "Tier 10 Rocket": 1, "Neodymium": 10, "Quantum Processor": 3 }, station: "launchpad" },
  { result: "Tier 12 Rocket", count: 1, req: { "Tier 11 Rocket": 1, "Dark Matter": 6, "Quantum Processor": 4 }, station: "launchpad" },
  { result: "Tier 13 Rocket", count: 1, req: { "Tier 12 Rocket": 1, "Tachyon Shard": 8, "Warp Drive Coil": 1 }, station: "launchpad" },
  { result: "Tier 14 Rocket", count: 1, req: { "Tier 13 Rocket": 1, "Antimatter": 8, "Warp Drive Coil": 2 }, station: "launchpad" },
  { result: "Tier 15 Rocket", count: 1, req: { "Tier 14 Rocket": 1, "Chronos Crystal": 8, "Warp Drive Coil": 3 }, station: "launchpad" },

  { result: "Warp Drive Coil", count: 1, req: { "Neodymium": 4, "Antimatter": 2, "Quantum Processor": 1 }, station: "particle_collider" },
  { result: "Helium Plasma Wand", count: 1, req: { "Helium-3": 6, "Gold Ingot": 4, "Diamond": 2 }, station: "assembler" },
  { result: "Titanium Pickaxe", count: 1, req: { "Titanium Ingot": 8, "Diamond": 2 }, station: "workbench" },
  { result: "Titanium Battleaxe", count: 1, req: { "Titanium Ingot": 10, [PLANKS]: 4 }, station: "workbench" },
  { result: "Acid-Resistant Suit", count: 1, req: { "Sulfur": 8, "Titanium Ingot": 6 }, station: "assembler" },
  { result: "Cryo Breaker", count: 1, req: { "Lithium Brine": 6, "Titanium Ingot": 8 }, station: "assembler" },
  { result: "Frost Scepter", count: 1, req: { "Lithium Brine": 8, "Quantum Processor": 1 }, station: "assembler" },
  { result: "Magma Claymore", count: 1, req: { "Pyroclastic Ore": 8, "Obsidian": 6 }, station: "workbench" },
  { result: "Thermal Pulse Rifle", count: 1, req: { "Pyroclastic Ore": 6, "Quantum Processor": 2 }, station: "assembler" },
  { result: "Dark Matter Blade", count: 1, req: { "Dark Matter": 8, "Titanium Ingot": 8 }, station: "particle_collider" },
  { result: "Tachyon Bow", count: 1, req: { "Tachyon Shard": 6, "Quantum Processor": 2 }, station: "particle_collider" },
  { result: "Antimatter Annihilator", count: 1, req: { "Antimatter": 8, "Warp Drive Coil": 1 }, station: "particle_collider" },
  { result: "Infinity Singularity Blade", count: 1, req: { "Singularity Core": 4, "Chronos Crystal": 4, "Warp Drive Coil": 2 }, station: "particle_collider" }
];

// UI Coordinate Helpers
const INV_UI_X = Math.floor((SCREEN_WIDTH - 780) / 2);
const INV_UI_Y = Math.floor((SCREEN_HEIGHT - 540) / 2);

function getSlotRect(idx) {
  const col = idx % 10;
  const gx = INV_UI_X + 160 + col * 48;
  const gy = (idx < 10) ? (INV_UI_Y + 185) : (idx < 20) ? (INV_UI_Y + 75) : (INV_UI_Y + 128);
  return { x: gx, y: gy, w: 44, h: 44 };
}

function getArmorRect(slotName) {
  const ax = INV_UI_X + 45;
  const ay = INV_UI_Y + ((slotName === "helmet") ? 75 : (slotName === "chest") ? 128 : 185);
  return { x: ax, y: ay, w: 46, h: 46 };
}

function getBlockMaterial(bid) {
  if ([DIRT, GRASS, MOON_REGOLITH, MARTIAN_SOIL, TITAN_METHANE_CRUST].includes(bid)) return "dirt";
  if ([WOOD, PLANKS, WORKBENCH, BOOKSHELF, WOOD_TABLE, WOOD_CHAIR].includes(bid)) return "wood";
  if ([LEAVES].includes(bid)) return "leaves";
  if ([GLASS, CRYSTAL_GLASS].includes(bid)) return "glass";
  if ([INNER_CORE_METAL, CORE_CRYSTAL, OBSIDIAN, IRON_BARS, LANTERN, DIAMOND_ORE, HELIUM3_ORE,
       TITANIUM_ORE, SULFUR_ORE, CINNABAR_ORE, LITHIUM_BRINE_ORE, HYDROCARBON_ORE, PYROCLASTIC_ORE,
       DEUTERIUM_ORE, PALLADIUM_ORE, NEODYMIUM_ORE, DARK_MATTER_ORE, TACHYON_ORE, ANTIMATTER_ORE,
       CHRONOS_ORE, SINGULARITY_ORE, LAUNCHPAD, ASSEMBLER, PARTICLE_COLLIDER, TECH_PLATING, NEON_LAMP].includes(bid)) return "metal";
  if ([MAGMA_STONE, MOLTEN_CORE].includes(bid)) return "magma";
  return "stone";
}

function getPlayerMiningCapability(player) {
  const sel = player.inv.getSelected();
  const charmMult = (player.inv.countItem("Mining Charm") > 0) ? 1.35 : 1.0;
  if (!sel || !ITEM_DEFINITIONS[sel.item]) {
    return { type: "hand", tier: 0, mult: 1.0 * charmMult, name: "Bare Hand" };
  }
  const idata = ITEM_DEFINITIONS[sel.item];
  return {
    type: idata.tool_type || "hand",
    tier: idata.tier || 0,
    mult: (idata.mult || 1.0) * charmMult,
    name: sel.item
  };
}

function evaluateMiningInteraction(player, tileId) {
  const bdata = BLOCK_DATA[tileId] || {};
  const reqTier = bdata.req_tier || 0;
  const reqTool = bdata.req_tool || "Any";
  const mohs = bdata.mohs || 1.0;
  const cap = getPlayerMiningCapability(player);

  if (reqTier === 0 && ["Any", "Shovel", "Axe"].includes(reqTool)) {
    const eff = ["shovel", "axe"].includes(cap.type) ? cap.mult : 1.0;
    return { canDamage: true, canDrop: true, effMult: eff, msg: "Harvestable" };
  }
  if (cap.tier < reqTier - 1) {
    return { canDamage: false, canDrop: false, effMult: 0.0, msg: "DEFLECTED (Tool Too Weak)" };
  }
  if (cap.type === "hand" && mohs >= 4.0) {
    return { canDamage: false, canDrop: false, effMult: 0.0, msg: "DEFLECTED (Hand Abrasion)" };
  }

  let isProperTool = false;
  if (reqTool === "Pickaxe" && ["pickaxe", "drill", "hammer"].includes(cap.type)) isProperTool = true;
  else if (reqTool === "Drill" && ["drill", "hammer"].includes(cap.type)) isProperTool = true;
  else if (reqTool === "Shovel" && cap.type === "shovel") isProperTool = true;
  else if (reqTool === "Axe" && cap.type === "axe") isProperTool = true;

  if (!isProperTool) {
    return { canDamage: true, canDrop: false, effMult: 0.15, msg: "Inefficient Tool (No Drop)" };
  }
  if (cap.tier < reqTier) {
    return { canDamage: true, canDrop: false, effMult: 0.35, msg: "Chipping (Tier Low: No Drop)" };
  }
  return { canDamage: true, canDrop: true, effMult: cap.mult, msg: "Harvestable" };
}

// ==========================================
// PROCEDURAL AUDIO SYNTHESIZER (WEB AUDIO API)
// ==========================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.buffers = {};
    this.enabled = false;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    this.ctx = new AudioContextClass();
    this.enabled = true;
    this._bakeAllSounds();
  }

  play(name) {
    if (!this.enabled || !this.ctx || !this.buffers[name]) return;
    if (this.ctx.state === "suspended") this.ctx.resume();
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers[name];
    src.connect(this.ctx.destination);
    src.start();
  }

  _makeBuffer(dur, generator) {
    const sr = this.ctx.sampleRate;
    const n = Math.floor(sr * dur);
    const buf = this.ctx.createBuffer(1, n, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) {
      const t = i / n;
      data[i] = generator(t, i, n, sr);
    }
    return buf;
  }

  _bakeAllSounds() {
    this.buffers.mine_dirt = this._makeBuffer(0.045, (t) => (Math.sin(2 * Math.PI * 125 * t) * 0.7 + (Math.random() * 0.6 - 0.3)) * ((1 - t) ** 2));
    this.buffers.mine_stone = this._makeBuffer(0.04, (t) => (Math.sin(2 * Math.PI * 1420 * t) * 0.85 + (Math.random() * 0.3 - 0.15)) * ((1 - t) ** 3));
    this.buffers.mine_glass = this._makeBuffer(0.04, (t) => Math.sin(2 * Math.PI * 2100 * t) * ((1 - t) ** 2));
    this.buffers.mine_wood = this._makeBuffer(0.05, (t) => Math.sin(2 * Math.PI * (460 - t * 240) * t) * ((1 - t) ** 2.2));
    this.buffers.mine_leaves = this._makeBuffer(0.035, (t) => (Math.random() * 1.6 - 0.8) * (1 - t));
    this.buffers.mine_metal = this._makeBuffer(0.06, (t) => (Math.sin(2 * Math.PI * 1760 * t) * 0.6 + Math.sin(2 * Math.PI * 2350 * t) * 0.4) * ((1 - t) ** 1.8));
    this.buffers.mine_magma = this._makeBuffer(0.055, (t) => (Math.sin(2 * Math.PI * 1100 * t) * 0.5 + (Math.random() - 0.5)) * ((1 - t) ** 2));

    this.buffers.break_dirt = this._makeBuffer(0.12, (t) => (Math.sin(2 * Math.PI * 85 * t) * 0.6 + (Math.random() * 0.8 - 0.4)) * (1 - t));
    this.buffers.break_stone = this._makeBuffer(0.14, (t) => ((Math.random() * 1.4 - 0.7) + Math.sin(2 * Math.PI * 95 * t) * 0.3) * (1 - t));
    this.buffers.break_wood = this._makeBuffer(0.13, (t) => (Math.sin(2 * Math.PI * 280 * t) * 0.5 + (Math.random() - 0.5)) * ((1 - t) ** 1.5));
    this.buffers.break_leaves = this.buffers.mine_leaves;
    this.buffers.break_metal = this._makeBuffer(0.18, (t) => (Math.sin(2 * Math.PI * 1480 * t) * 0.5 + (Math.random() - 0.5)) * ((1 - t) ** 1.2));
    this.buffers.break_magma = this.buffers.break_stone;
    this.buffers.break_glass = this._makeBuffer(0.14, (t) => (Math.random() * 1.8 - 0.9) * ((1 - t) ** 1.8));

    this.buffers.jump = this._makeBuffer(0.11, (t) => Math.sin(2 * Math.PI * (240 + 320 * t) * t) * (1 - t));
    this.buffers.place = this._makeBuffer(0.06, (t) => (2 * Math.abs(2 * (((150 - 80 * t) * t) % 1) - 1) - 1) * (1 - t));
    this.buffers.hurt = this._makeBuffer(0.16, (t) => (2 * (((170 - 120 * t) * t) % 1) - 1) * (1 - t));
    this.buffers.click = this._makeBuffer(0.025, (t) => Math.sin(2 * Math.PI * (800 - 400 * t) * t) * (1 - t));
    this.buffers.burn = this._makeBuffer(0.16, (t) => (Math.random() * 1.6 - 0.8 + Math.sin(2 * Math.PI * 220 * t) * 0.4) * (1 - t));
    this.buffers.smelt = this._makeBuffer(0.24, (t) => (Math.random() * 1.6 - 0.8 + Math.sin(2 * Math.PI * 220 * t) * 0.4) * (1 - t));
    this.buffers.radar = this._makeBuffer(0.22, (t) => Math.sin(2 * Math.PI * (1320 - t * 400) * t) * ((1 - t) ** 1.2));
    this.buffers.launch = this._makeBuffer(0.65, (t) => Math.sin(2 * Math.PI * (80 + 800 * t) * t) * (1 - t));
    this.buffers.boom = this._makeBuffer(0.40, (t) => ((Math.random() * 2 - 1) * 0.8 + Math.sin(2 * Math.PI * 65 * t) * 0.2) * ((1 - t) ** 1.5));

    this.buffers.craft = this._makeArpeggio([523, 659, 784], 0.20);
    this.buffers.potion = this._makeArpeggio([440, 554, 659], 0.15);
    this.buffers.level_up = this._makeArpeggio([523, 659, 784, 1046], 0.35);
    this.buffers.warp = this._makeArpeggio([300, 450, 600, 900, 1200], 0.40);
  }

  _makeArpeggio(freqs, dur) {
    const sr = this.ctx.sampleRate;
    const n = Math.floor(sr * dur);
    const buf = this.ctx.createBuffer(1, n, sr);
    const data = buf.getChannelData(0);
    const step = Math.floor(n / freqs.length);
    for (let i = 0; i < n; i++) {
      const idx = Math.min(freqs.length - 1, Math.floor(i / step));
      const f = freqs[idx];
      const env = 1 - ((i % step) / step);
      data[i] = Math.sin(2 * Math.PI * f * (i / sr)) * env * 0.8;
    }
    return buf;
  }
}

// ==========================================
// PROCEDURAL PIXEL ART GENERATOR
// ==========================================
class PixelArtGenerator {
  constructor() {
    this.tiles = {};
    this.icons = {};
    this.crack_overlays = [];
    this._bakeAll();
  }

  _bakeAll() {
    for (const [bidStr, data] of Object.entries(BLOCK_DATA)) {
      const bid = Number(bidStr);
      const cvs = document.createElement("canvas");
      cvs.width = TILE_SIZE;
      cvs.height = TILE_SIZE;
      const ctx = cvs.getContext("2d");

      ctx.fillStyle = data.color;
      ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);

      if (bid === GRASS) {
        ctx.fillStyle = "#6e4628";
        ctx.fillRect(0, 8, TILE_SIZE, TILE_SIZE - 8);
        ctx.fillStyle = "#4b9128";
        ctx.fillRect(0, 0, TILE_SIZE, 8);
      } else if (bid === CHEST) {
        ctx.fillStyle = "#643c1e";
        ctx.strokeRect(2, 2, 28, 28);
        ctx.fillStyle = "#d7af28";
        ctx.fillRect(14, 10, 4, 6);
      } else if (bid === TORCH) {
        ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = "#7d502d";
        ctx.fillRect(14, 12, 5, 17);
        ctx.fillStyle = "#ffb428";
        ctx.beginPath();
        ctx.arc(16, 9, 6, 0, Math.PI * 2);
        ctx.fill();
      } else if (bid === GLASS || bid === CRYSTAL_GLASS) {
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.lineWidth = 2;
        ctx.strokeRect(2, 2, 28, 28);
      }

      this.tiles[bid] = cvs;
      this.icons[bid] = cvs;
    }

    // Material Icons
    for (const [name, idata] of Object.entries(ITEM_DEFINITIONS)) {
      if (this.icons[name]) continue;
      const cvs = document.createElement("canvas");
      cvs.width = 32;
      cvs.height = 32;
      const ctx = cvs.getContext("2d");

      if (idata.type === "weapon" || idata.type === "tool") {
        ctx.strokeStyle = COLOR_GOLD;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(6, 26);
        ctx.lineTo(26, 6);
        ctx.stroke();
      } else if (idata.type === "armor") {
        ctx.fillStyle = "#aaafbe";
        ctx.fillRect(6, 6, 20, 20);
      } else if (idata.type === "rocket") {
        ctx.fillStyle = "#e6e6eb";
        ctx.beginPath();
        ctx.moveTo(16, 4);
        ctx.lineTo(24, 26);
        ctx.lineTo(8, 26);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillStyle = COLOR_CYAN;
        ctx.beginPath();
        ctx.arc(16, 16, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      this.icons[name] = cvs;
    }

    // Crack overlays
    for (let stage = 0; stage < 10; stage++) {
      const cvs = document.createElement("canvas");
      cvs.width = TILE_SIZE;
      cvs.height = TILE_SIZE;
      const ctx = cvs.getContext("2d");
      ctx.strokeStyle = `rgba(0, 0, 0, ${0.3 + stage * 0.07})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(16, 16);
      ctx.lineTo(16 - stage, 16 + stage);
      ctx.moveTo(16, 16);
      ctx.lineTo(16 + stage, 16 - stage);
      ctx.stroke();
      this.crack_overlays.push(cvs);
    }
  }
}

// ==========================================
// PARTICLES & FLOATING TEXTS
// ==========================================
class Particle {
  constructor(x, y, vx, vy, color, size, life) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = size;
    this.max_life = life;
    this.life = life;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.18;
    this.life--;
  }

  draw(ctx, camX, camY) {
    if (this.life <= 0) return;
    const sz = Math.max(1, Math.floor(this.size * (this.life / this.max_life)));
    ctx.fillStyle = this.color;
    ctx.fillRect(Math.floor(this.x - camX), Math.floor(this.y - camY), sz, sz);
  }
}

class FloatingText {
  constructor(x, y, text, color, duration = 45) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
    this.life = duration;
    this.max_life = duration;
  }

  update() {
    this.y -= 0.65;
    this.life--;
  }

  draw(ctx, camX, camY) {
    const alpha = Math.max(0, Math.min(1, this.life / this.max_life));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.fillText(this.text, Math.floor(this.x - camX), Math.floor(this.y - camY));
    ctx.restore();
  }
}

// ==========================================
// INVENTORY MANAGER
// ==========================================
class InventoryManager {
  constructor() {
    this.slots = new Array(30).fill(null);
    this.armor = { helmet: null, chest: null, boots: null };
    this.selectedHotbar = 0;
  }

  addItem(item, count = 1) {
    for (let i = 0; i < 30; i++) {
      if (this.slots[i] && this.slots[i].item === item) {
        this.slots[i].count += count;
        return true;
      }
    }
    for (let i = 0; i < 30; i++) {
      if (this.slots[i] === null) {
        this.slots[i] = { item, count };
        return true;
      }
    }
    return false;
  }

  removeItem(item, count = 1) {
    for (let i = 0; i < 30; i++) {
      if (this.slots[i] && this.slots[i].item === item) {
        if (this.slots[i].count >= count) {
          this.slots[i].count -= count;
          if (this.slots[i].count <= 0) this.slots[i] = null;
          return true;
        }
      }
    }
    return false;
  }

  countItem(item) {
    let sum = 0;
    for (const s of this.slots) {
      if (s && s.item === item) sum += s.count;
    }
    return sum;
  }

  getSelected() {
    return this.slots[this.selectedHotbar];
  }
}

// ==========================================
// WORLD GENERATOR & LIQUID PHYSICS
// ==========================================
class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = Array.from({ length: width }, () => new Array(height).fill(AIR));
    this.damage_map = new Map();
    this.fluid_tick = 0;
    this.current_planet = "Earth";
  }

  _spawnVein(oreId, minY, maxY, count, size, validHosts) {
    for (let i = 0; i < count; i++) {
      let vx = 3 + Math.floor(Math.random() * (this.width - 6));
      let vy = minY + Math.floor(Math.random() * (maxY - minY));
      for (let s = 0; s < size; s++) {
        if (vx >= 0 && vx < this.width && vy >= 0 && vy < this.height) {
          if (validHosts.includes(this.tiles[vx][vy])) {
            this.tiles[vx][vy] = oreId;
          }
        }
        vx += (Math.random() < 0.5 ? -1 : 1);
        vy += (Math.random() < 0.5 ? -1 : 1);
      }
    }
  }

  generate(planetName = "Earth") {
    this.current_planet = planetName;
    this.damage_map.clear();
    this.tiles = Array.from({ length: this.width }, () => new Array(this.height).fill(AIR));

    const heights = [];
    for (let x = 0; x < this.width; x++) {
      const h = Math.floor(CRUST_SURFACE + Math.sin(x * 0.12) * 5 + Math.sin(x * 0.04) * 7);
      heights.push(h);
    }

    for (let x = 0; x < this.width; x++) {
      const g = heights[x];
      for (let y = g; y < this.height; y++) {
        if (y === g) this.tiles[x][y] = (planetName === "Earth") ? GRASS : STONE;
        else if (y < g + 5) this.tiles[x][y] = DIRT;
        else if (y < CRUST_BOTTOM) this.tiles[x][y] = STONE;
        else if (y < UPPER_MANTLE_BOTTOM) this.tiles[x][y] = PERIDOTITE;
        else if (y < LOWER_MANTLE_BOTTOM) this.tiles[x][y] = BASALT;
        else if (y < OUTER_CORE_BOTTOM) this.tiles[x][y] = MAGMA_STONE;
        else this.tiles[x][y] = (Math.random() < 0.22) ? CORE_CRYSTAL : INNER_CORE_METAL;
      }
    }

    this._spawnVein(COAL_ORE, 30, 80, 40, 8, [STONE, DIRT]);
    this._spawnVein(IRON_ORE, 35, 90, 32, 6, [STONE, BASALT]);
    this._spawnVein(GOLD_ORE, 45, 105, 20, 5, [STONE, PERIDOTITE]);
    this._spawnVein(DIAMOND_ORE, 55, 115, 16, 5, [PERIDOTITE, BASALT]);
    this._spawnVein(LAVA, 90, 140, 15, 8, [MAGMA_STONE, AIR]);
  }

  getTile(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) return this.tiles[x][y];
    return STONE;
  }

  setTile(x, y, tile) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.tiles[x][y] = tile;
      this.damage_map.delete(`${x},${y}`);
    }
  }

  updateLiquids(particles, sound) {
    this.fluid_tick++;
    if (this.fluid_tick % 10 !== 0) return;

    for (let y = this.height - 2; y >= 1; y--) {
      for (let x = 1; x < this.width - 1; x++) {
        if (this.tiles[x][y] === LAVA) {
          if (this.tiles[x][y + 1] === AIR) {
            this.tiles[x][y + 1] = LAVA;
            this.tiles[x][y] = AIR;
          } else if (this.tiles[x - 1][y] === AIR) {
            this.tiles[x - 1][y] = LAVA;
            this.tiles[x][y] = AIR;
          } else if (this.tiles[x + 1][y] === AIR) {
            this.tiles[x + 1][y] = LAVA;
            this.tiles[x][y] = AIR;
          }
        }
      }
    }
  }
}

// ==========================================
// DYNAMIC LIGHTING ENGINE (OFFSCREEN CANVAS)
// ==========================================
class OptimizedLighting {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = LIGHT_W;
    this.canvas.height = LIGHT_H;
    this.ctx = this.canvas.getContext("2d");
  }

  render(mainCtx, player, world, camX, camY) {
    const pTy = Math.floor(player.y / TILE_SIZE);
    let amb = "#28262a";
    if (pTy < CRUST_SURFACE) amb = "#888896";
    else if (pTy < CRUST_BOTTOM) amb = "#28262a";
    else if (pTy < UPPER_MANTLE_BOTTOM) amb = "#231c1e";
    else if (pTy < LOWER_MANTLE_BOTTOM) amb = "#502819";
    else amb = "#964b14";

    this.ctx.fillStyle = amb;
    this.ctx.fillRect(0, 0, LIGHT_W, LIGHT_H);

    this.ctx.globalCompositeOperation = "lighter";

    // Player light
    const px = Math.floor((player.x + player.w / 2 - camX) / LIGHT_SCALE);
    const py = Math.floor((player.y + player.h / 2 - camY) / LIGHT_SCALE);
    const grad = this.ctx.createRadialGradient(px, py, 4, px, py, 35);
    grad.addColorStop(0, "rgba(255, 230, 180, 1)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = grad;
    this.ctx.beginPath();
    this.ctx.arc(px, py, 35, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.globalCompositeOperation = "source-over";

    mainCtx.save();
    mainCtx.globalCompositeOperation = "multiply";
    mainCtx.drawImage(this.canvas, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    mainCtx.restore();
  }
}

// ==========================================
// ENTITIES: SLIME, PROJECTILE, PLAYER
// ==========================================
class SlimeEnemy {
  constructor(x, y, etype = "Crust") {
    this.x = x;
    this.y = y;
    this.w = 28;
    this.h = 22;
    this.vx = 0;
    this.vy = 0;
    this.type = etype;
    this.max_hp = (etype === "Crust") ? 35 : (etype === "Mantle") ? 90 : 220;
    this.hp = this.max_hp;
    this.damage = (etype === "Crust") ? 12 : (etype === "Mantle") ? 24 : 45;
    this.color = (etype === "Crust") ? "#50c864" : (etype === "Mantle") ? "#dc5a28" : "#fff078";
    this.jumpTimer = Math.floor(Math.random() * 60) + 30;
    this.onGround = false;
  }

  update(world, player) {
    this.vy = Math.min(9, this.vy + 0.35);
    this.jumpTimer--;
    if (this.jumpTimer <= 0 && this.onGround) {
      this.jumpTimer = Math.floor(Math.random() * 60) + 40;
      this.vy = -7.2;
      this.vx = (player.x > this.x ? 1 : -1) * (2 + Math.random());
    }

    if (this.onGround) this.vx *= 0.82;
    this.x += this.vx;
    this.y += this.vy;

    const tx = Math.floor((this.x + this.w / 2) / TILE_SIZE);
    const ty = Math.floor((this.y + this.h) / TILE_SIZE);
    if (world.getTile(tx, ty) !== AIR) {
      this.y = ty * TILE_SIZE - this.h;
      this.vy = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }
  }

  draw(ctx, camX, camY) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(this.x - camX + this.w / 2, this.y - camY + this.h / 2, this.w / 2, this.h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Projectile {
  constructor(x, y, tx, ty, damage, ptype = "magic") {
    this.x = x;
    this.y = y;
    this.damage = damage;
    this.type = ptype;
    this.life = 75;
    const ang = Math.atan2(ty - y, tx - x);
    const speed = (ptype === "dynamite") ? 8.0 : 10.5;
    this.vx = Math.cos(ang) * speed;
    this.vy = Math.sin(ang) * speed - ((ptype === "dynamite") ? 2.5 : 0);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.type === "dynamite") this.vy += 0.22;
    this.life--;
  }

  draw(ctx, camX, camY) {
    ctx.fillStyle = (this.type === "dynamite") ? COLOR_HP : COLOR_CYAN;
    ctx.beginPath();
    ctx.arc(this.x - camX, this.y - camY, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Player {
  constructor(x, y, chosenClass = "Warrior") {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 42;
    this.vx = 0.0;
    this.vy = 0.0;
    this.onGround = false;
    this.facingRight = true;
    this.inLava = false;

    this.pClass = chosenClass;
    const stats = CLASSES[chosenClass];
    this.max_hp = stats.hp;
    this.hp = this.max_hp;
    this.base_damage = stats.dmg;
    this.move_speed = stats.speed;
    this.mine_mult = stats.mine_speed;
    this.color = stats.color;

    this.level = 1;
    this.xp = 0;
    this.xp_next = 100;
    this.inv = new InventoryManager();

    this.attackCooldown = 0;
    this.swingAnim = 0;
    this.speedBuffTimer = 0;
  }

  addXp(amt, floatTexts, sound) {
    this.xp += amt;
    floatTexts.push(new FloatingText(this.x, this.y - 10, `+${amt} XP`, COLOR_EXP));
    while (this.xp >= this.xp_next) {
      this.xp -= this.xp_next;
      this.level++;
      this.xp_next = Math.floor(this.xp_next * 1.45);
      this.max_hp += 18;
      this.hp = this.max_hp;
      this.base_damage += 4;
      this.mine_mult += 0.15;
      sound.play("level_up");
      floatTexts.push(new FloatingText(this.x, this.y - 28, "LEVEL UP!", COLOR_GOLD, 70));
    }
  }

  update(world, keys, sound) {
    this.inLava = false;
    const tx = Math.floor((this.x + this.w / 2) / TILE_SIZE);
    const ty = Math.floor((this.y + this.h / 2) / TILE_SIZE);
    if (world.getTile(tx, ty) === LAVA) this.inLava = true;

    let spd = this.move_speed * (this.inLava ? 0.45 : 1.0);
    if (this.speedBuffTimer > 0) {
      this.speedBuffTimer--;
      spd *= 1.45;
    }

    let targetVx = 0;
    if (keys["KeyA"] || keys["ArrowLeft"]) {
      targetVx = -spd;
      this.facingRight = false;
    }
    if (keys["KeyD"] || keys["ArrowRight"]) {
      targetVx = spd;
      this.facingRight = true;
    }
    this.vx += (targetVx - this.vx) * 0.25;

    const pGrav = (this.inv.countItem("Gravity Stabilizer") > 0) ? 0.42 : (PLANET_DATA[world.current_planet]?.gravity || 0.42);

    if ((keys["KeyW"] || keys["Space"] || keys["ArrowUp"]) && this.onGround) {
      this.vy = -8.2 * Math.sqrt(pGrav / 0.42);
      sound.play("jump");
    }

    this.vy += this.inLava ? 0.16 : pGrav;
    this.vy = Math.min(this.inLava ? 4.2 : 13.0, this.vy);

    // Collision Resolution with Sub-stepping
    this.x += this.vx;
    this._colX(world);
    this.y += this.vy;
    this._colY(world);

    if (this.attackCooldown > 0) this.attackCooldown--;
    if (this.swingAnim > 0) this.swingAnim--;
  }

  _colX(world) {
    const left = Math.floor(this.x / TILE_SIZE);
    const right = Math.floor((this.x + this.w) / TILE_SIZE);
    const top = Math.floor(this.y / TILE_SIZE);
    const bottom = Math.floor((this.y + this.h - 1) / TILE_SIZE);

    for (let ty = top; ty <= bottom; ty++) {
      for (let tx = left; tx <= right; tx++) {
        if (![AIR, TORCH, LAVA, LANTERN, NEON_LAMP].includes(world.getTile(tx, ty))) {
          if (this.vx > 0) this.x = tx * TILE_SIZE - this.w;
          else if (this.vx < 0) this.x = (tx + 1) * TILE_SIZE;
          this.vx = 0;
        }
      }
    }
  }

  _colY(world) {
    this.onGround = false;
    const left = Math.floor(this.x / TILE_SIZE);
    const right = Math.floor((this.x + this.w - 1) / TILE_SIZE);
    const top = Math.floor(this.y / TILE_SIZE);
    const bottom = Math.floor((this.y + this.h) / TILE_SIZE);

    for (let ty = top; ty <= bottom; ty++) {
      for (let tx = left; tx <= right; tx++) {
        if (![AIR, TORCH, LAVA, LANTERN, NEON_LAMP].includes(world.getTile(tx, ty))) {
          if (this.vy > 0) {
            this.y = ty * TILE_SIZE - this.h;
            this.onGround = true;
          } else if (this.vy < 0) {
            this.y = (ty + 1) * TILE_SIZE;
          }
          this.vy = 0;
        }
      }
    }
  }

  draw(ctx, camX, camY) {
    const dx = Math.floor(this.x - camX);
    const dy = Math.floor(this.y - camY);

    ctx.fillStyle = this.color;
    ctx.fillRect(dx + 2, dy + 10, 16, 16);

    ctx.fillStyle = "#ebd2b4";
    ctx.fillRect(dx + 3, dy, 14, 10);

    ctx.fillStyle = "#0a0a0f";
    const eyeX = this.facingRight ? (dx + 12) : (dx + 5);
    ctx.fillRect(eyeX, dy + 3, 3, 3);

    ctx.fillStyle = this.color;
    ctx.fillRect(dx + 4, dy + 26, 4, 16);
    ctx.fillRect(dx + 12, dy + 26, 4, 16);
  }
}

// ==========================================
// MAIN GAME CONTROLLER & UI LOOP
// ==========================================
class EarthTerrariaRPG {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.sound = new SoundEngine();
    this.art = new PixelArtGenerator();
    this.lighting = new OptimizedLighting();
    this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);

    this.state = "MENU";
    this.player = null;
    this.enemies = [];
    this.projectiles = [];
    this.particles = [];
    this.floatTexts = [];

    this.keys = {};
    this.mouse = { x: 0, y: 0, down: false, rightDown: false };
    this.camX = 0;
    this.camY = 0;

    this.recipeScrollOffset = 0;
    this.planetScrollOffset = 0;
    this.searchQuery = "";
    this.craftCategory = "ALL";
    this.gameWon = false;

    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;
      if (e.code === "KeyE" || e.code === "KeyI") {
        if (this.state === "PLAYING") this.state = "INVENTORY";
        else if (this.state === "INVENTORY") this.state = "PLAYING";
      }
      if (e.code === "Escape") {
        if (this.state === "INVENTORY" || this.state === "STAR_MAP") this.state = "PLAYING";
      }
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });

    const getCanvasPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const sx = SCREEN_WIDTH / rect.width;
      const sy = SCREEN_HEIGHT / rect.height;
      return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sy };
    };

    this.canvas.addEventListener("mousemove", (e) => {
      const pos = getCanvasPos(e);
      this.mouse.x = pos.x;
      this.mouse.y = pos.y;
    });

    this.canvas.addEventListener("mousedown", (e) => {
      this.sound.init();
      const pos = getCanvasPos(e);
      this.mouse.x = pos.x;
      this.mouse.y = pos.y;
      if (e.button === 0) {
        this.mouse.down = true;
        this.handleLeftClick();
      } else if (e.button === 2) {
        this.mouse.rightDown = true;
        this.handleRightClick();
      }
    });

    this.canvas.addEventListener("mouseup", (e) => {
      if (e.button === 0) this.mouse.down = false;
      if (e.button === 2) this.mouse.rightDown = false;
    });

    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());

    this.canvas.addEventListener("wheel", (e) => {
      if (this.state === "PLAYING" && this.player) {
        this.player.inv.selectedHotbar = (this.player.inv.selectedHotbar + (e.deltaY > 0 ? 1 : -1) + 10) % 10;
      }
    });
  }

  startNewGame() {
    this.world.generate("Earth");
    this.player = new Player(WORLD_WIDTH * TILE_SIZE / 2, 60 * TILE_SIZE, "Warrior");
    this.player.inv.addItem("Wood Pickaxe", 1);
    this.player.inv.addItem("Wood Sword", 1);
    this.player.inv.addItem(TORCH, 16);

    this.enemies = [new SlimeEnemy(this.player.x + 120, this.player.y, "Crust")];
    this.state = "PLAYING";
  }

  handleLeftClick() {
    if (this.state === "MENU") {
      this.startNewGame();
    } else if (this.state === "PLAYING") {
      const worldMx = this.mouse.x + this.camX;
      const worldMy = this.mouse.y + this.camY;
      const tgx = Math.floor(worldMx / TILE_SIZE);
      const tgy = Math.floor(worldMy / TILE_SIZE);

      const t = this.world.getTile(tgx, tgy);
      if (t !== AIR && t !== LAVA) {
        const evalMine = evaluateMiningInteraction(this.player, t);
        if (evalMine.canDamage) {
          const mat = getBlockMaterial(t);
          this.sound.play(`mine_${mat}`);
          const drop = BLOCK_DATA[t].drop;
          if (evalMine.canDrop && drop) this.player.inv.addItem(drop, 1);
          this.world.setTile(tgx, tgy, AIR);
        }
      }
    } else if (this.state === "INVENTORY") {
      for (const rec of RECIPES) {
        let canCraft = true;
        for (const [reqItem, reqAmt] of Object.entries(rec.req)) {
          if (this.player.inv.countItem(reqItem) < reqAmt) canCraft = false;
        }
        if (canCraft) {
          for (const [reqItem, reqAmt] of Object.entries(rec.req)) {
            this.player.inv.removeItem(reqItem, reqAmt);
          }
          this.player.inv.addItem(rec.result, rec.count);
          this.sound.play("craft");
          break;
        }
      }
    }
  }

  handleRightClick() {
    if (this.state === "PLAYING") {
      const worldMx = this.mouse.x + this.camX;
      const worldMy = this.mouse.y + this.camY;
      const tgx = Math.floor(worldMx / TILE_SIZE);
      const tgy = Math.floor(worldMy / TILE_SIZE);

      const sel = this.player.inv.getSelected();
      if (sel && BLOCK_DATA[sel.item]) {
        if (this.world.getTile(tgx, tgy) === AIR) {
          this.world.setTile(tgx, tgy, sel.item);
          this.player.inv.removeItem(sel.item, 1);
          this.sound.play("place");
        }
      }
    }
  }

  update() {
    if (this.state === "PLAYING" && this.player) {
      this.player.update(this.world, this.keys, this.sound);
      this.world.updateLiquids(this.particles, this.sound);

      this.camX += (this.player.x - SCREEN_WIDTH / 2 - this.camX) * 0.1;
      this.camY += (this.player.y - SCREEN_HEIGHT / 2 - this.camY) * 0.1;
      this.camX = Math.max(0, Math.min(this.camX, this.world.width * TILE_SIZE - SCREEN_WIDTH));
      this.camY = Math.max(0, Math.min(this.camY, this.world.height * TILE_SIZE - SCREEN_HEIGHT));

      for (const e of this.enemies) e.update(this.world, this.player);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].update();
        if (this.particles[i].life <= 0) this.particles.splice(i, 1);
      }
      for (let i = this.floatTexts.length - 1; i >= 0; i--) {
        this.floatTexts[i].update();
        if (this.floatTexts[i].life <= 0) this.floatTexts.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.fillStyle = COLOR_BG_DARK;
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    if (this.state === "MENU") {
      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 36px 'Courier New', monospace";
      this.ctx.textAlign = "center";
      this.ctx.fillText("ASTROSTRATA: REIGNITION", SCREEN_WIDTH / 2, 260);

      this.ctx.fillStyle = COLOR_CYAN;
      this.ctx.font = "16px 'Courier New', monospace";
      this.ctx.fillText("CLICK ANYWHERE TO BEGIN EXPEDITION", SCREEN_WIDTH / 2, 320);
      return;
    }

    if (this.state === "PLAYING" || this.state === "INVENTORY") {
      const minTx = Math.max(0, Math.floor(this.camX / TILE_SIZE));
      const maxTx = Math.min(this.world.width, Math.ceil((this.camX + SCREEN_WIDTH) / TILE_SIZE));
      const minTy = Math.max(0, Math.floor(this.camY / TILE_SIZE));
      const maxTy = Math.min(this.world.height, Math.ceil((this.camY + SCREEN_HEIGHT) / TILE_SIZE));

      for (let x = minTx; x < maxTx; x++) {
        for (let y = minTy; y < maxTy; y++) {
          const t = this.world.getTile(x, y);
          if (t !== AIR && this.art.tiles[t]) {
            this.ctx.drawImage(this.art.tiles[t], Math.floor(x * TILE_SIZE - this.camX), Math.floor(y * TILE_SIZE - this.camY));
          }
        }
      }

      for (const e of this.enemies) e.draw(this.ctx, this.camX, this.camY);
      if (this.player) this.player.draw(this.ctx, this.camX, this.camY);
      for (const pt of this.particles) pt.draw(this.ctx, this.camX, this.camY);
      for (const ft of this.floatTexts) ft.draw(this.ctx, this.camX, this.camY);

      if (this.player) this.lighting.render(this.ctx, this.player, this.world, this.camX, this.camY);

      // HUD
      this.ctx.fillStyle = COLOR_HP;
      this.ctx.fillRect(20, 20, Math.floor((this.player.hp / this.player.max_hp) * 180), 16);
      this.ctx.strokeStyle = COLOR_WHITE;
      this.ctx.strokeRect(20, 20, 180, 16);

      // Hotbar
      for (let i = 0; i < 10; i++) {
        const bx = SCREEN_WIDTH / 2 - 240 + i * 48;
        const by = SCREEN_HEIGHT - 60;
        this.ctx.fillStyle = (i === this.player.inv.selectedHotbar) ? "rgba(255, 215, 0, 0.4)" : "rgba(20, 24, 36, 0.8)";
        this.ctx.fillRect(bx, by, 44, 44);
        this.ctx.strokeStyle = (i === this.player.inv.selectedHotbar) ? COLOR_GOLD : "#444";
        this.ctx.strokeRect(bx, by, 44, 44);

        const slot = this.player.inv.slots[i];
        if (slot && this.art.icons[slot.item]) {
          this.ctx.drawImage(this.art.icons[slot.item], bx + 6, by + 6);
          if (slot.count > 1) {
            this.ctx.fillStyle = COLOR_GOLD;
            this.ctx.font = "bold 12px monospace";
            this.ctx.fillText(`${slot.count}`, bx + 28, by + 38);
          }
        }
      }

      if (this.state === "INVENTORY") {
        this.ctx.fillStyle = "rgba(10, 12, 18, 0.85)";
        this.ctx.fillRect(INV_UI_X, INV_UI_Y, 780, 540);
        this.ctx.strokeStyle = COLOR_GOLD;
        this.ctx.strokeRect(INV_UI_X, INV_UI_Y, 780, 540);

        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.font = "bold 20px 'Courier New', monospace";
        this.ctx.textAlign = "left";
        this.ctx.fillText("FABRICATION MATRIX (CLICK TO CRAFT)", INV_UI_X + 24, INV_UI_Y + 40);

        let cy = INV_UI_Y + 80;
        for (const rec of RECIPES.slice(0, 12)) {
          const rName = BLOCK_DATA[rec.result]?.name || rec.result;
          this.ctx.fillStyle = COLOR_WHITE;
          this.ctx.font = "13px monospace";
          this.ctx.fillText(`${rName} x${rec.count}`, INV_UI_X + 30, cy);
          cy += 32;
        }
      }
    }
  }

  run() {
    const loop = () => {
      this.update();
      this.draw();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

// Global start trigger
window.addEventListener("DOMContentLoaded", () => {
  const game = new EarthTerrariaRPG();
  const startBtn = document.getElementById("start-btn");
  const overlay = document.getElementById("loading-overlay");

  startBtn.classList.remove("hidden");
  startBtn.addEventListener("click", () => {
    game.sound.init();
    overlay.classList.add("fade-out");
    game.startNewGame();
  });

  game.run();
});