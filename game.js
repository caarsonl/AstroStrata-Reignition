// =============================================================================
// ASTROSTRATA: REIGNITION — COMPLETE ZERO-DEPENDENCY ENGINE (PART 1 / 4)
// Core Engine Configuration, Geological Registries & Material Database
// =============================================================================

const VERSION_STRING = "v0.3.2-mobile";
const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const TILE_SIZE = 32;
const WORLD_WIDTH = 110;
const WORLD_HEIGHT = 160;
const FPS = 60;
const SAVES_INDEX_KEY = "astrostrata_sectors_index_v3";
const SECTOR_DATA_PREFIX = "astrostrata_sector_data_";

const LIGHT_SCALE = 4;
const LIGHT_W = Math.floor(SCREEN_WIDTH / LIGHT_SCALE);
const LIGHT_H = Math.floor(SCREEN_HEIGHT / LIGHT_SCALE);

// Master Color Palette
const COLOR_BLACK = "#0a0a0f";
const COLOR_WHITE = "#f5f5fa";
const COLOR_GOLD = "#ffd700";
const COLOR_CYAN = "#5adcff";
const COLOR_EXP = "#78e650";
const COLOR_HP = "#eb3c3c";
const COLOR_HEAT = "#ff5f1e";
const COLOR_PRESSURE = "#b450f0";
const COLOR_BG_DARK = "#10121a";

// Strata Depth Boundaries (Tile Grid Y Coordinates)
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
  [CHEST]: { name: "Loot Cache", hardness: 1.2, mohs: 2.5, color: "#a56e2d", drop: CHEST, req_tier: 0, req_tool: "Axe", desc: "Subterranean cache with survival supplies." },
  [DIRT]: { name: "Dirt", hardness: 0.7, mohs: 1.5, color: "#734b2d", drop: DIRT, req_tier: 0, req_tool: "Shovel", desc: "Soft organic topsoil." },
  [GRASS]: { name: "Grass Block", hardness: 0.7, mohs: 1.5, color: "#4b9128", drop: DIRT, req_tier: 0, req_tool: "Shovel", desc: "Root-bound surface humus layer." },
  [STONE]: { name: "Crust Stone", hardness: 1.8, mohs: 5.5, color: "#787880", drop: STONE, req_tier: 1, req_tool: "Pickaxe", desc: "Brittle continental granitic bedrock." },
  [COAL_ORE]: { name: "Coal Ore", hardness: 2.0, mohs: 3.0, color: "#28282d", drop: "Coal", req_tier: 1, req_tool: "Pickaxe", desc: "Compressed carbon fuel matrix.", xp: 12 },
  [IRON_ORE]: { name: "Iron Ore", hardness: 2.6, mohs: 5.5, color: "#b98769", drop: "Iron Ore", req_tier: 2, req_tool: "Pickaxe", desc: "Dense banded iron formation.", xp: 20 },
  [GOLD_ORE]: { name: "Gold Ore", hardness: 3.2, mohs: 4.5, color: "#e6c328", drop: "Gold Ore", req_tier: 3, req_tool: "Pickaxe", desc: "Heavy auriferous quartz vein.", xp: 35 },
  [DIAMOND_ORE]: { name: "Diamond Ore", hardness: 4.5, mohs: 10.0, color: "#50e1ff", drop: "Diamond", req_tier: 3, req_tool: "Pickaxe", desc: "Kimberlite diamond crystallization.", xp: 80 },
  [WOOD]: { name: "Wood Log", hardness: 1.2, mohs: 2.5, color: "#825532", drop: WOOD, req_tier: 0, req_tool: "Axe", desc: "Combustible timber log." },
  [LEAVES]: { name: "Leaves", hardness: 0.25, mohs: 1.0, color: "#289632", drop: null, req_tier: 0, req_tool: "Any", desc: "Soft solar-capture canopy." },
  [PLANKS]: { name: "Wood Planks", hardness: 1.0, mohs: 2.5, color: "#af7d46", drop: PLANKS, req_tier: 0, req_tool: "Axe", desc: "Processed building lumber." },
  [TORCH]: { name: "Torch", hardness: 0.1, mohs: 1.0, color: "#ffb428", drop: TORCH, req_tier: 0, req_tool: "Any", desc: "Illuminates dark subterranean caverns.", light: 140 },
  [WORKBENCH]: { name: "Workbench", hardness: 1.4, mohs: 2.5, color: "#966437", drop: WORKBENCH, req_tier: 0, req_tool: "Axe", desc: "Workshop station for tools & gear." },
  [FURNACE]: { name: "Stone Furnace", hardness: 2.0, mohs: 5.5, color: "#64646e", drop: FURNACE, req_tier: 2, req_tool: "Pickaxe", desc: "Thermal forge station for smelting ingots.", light: 110 },
  [STONE_BRICKS]: { name: "Stone Bricks", hardness: 2.0, mohs: 5.5, color: "#828287", drop: STONE_BRICKS, req_tier: 1, req_tool: "Pickaxe", desc: "Chiseled load-bearing masonry." },
  [BASALT_BRICKS]: { name: "Basalt Bricks", hardness: 3.5, mohs: 6.5, color: "#32323c", drop: BASALT_BRICKS, req_tier: 3, req_tool: "Pickaxe", desc: "Sintered volcanic paving stones." },
  [GLASS]: { name: "Glass Block", hardness: 0.4, mohs: 5.5, color: "#afe1f0", drop: null, req_tier: 0, req_tool: "Any", desc: "Transparent fused silica window." },
  [LANTERN]: { name: "Hanging Lantern", hardness: 0.5, mohs: 5.0, color: "#ffcd4b", drop: LANTERN, req_tier: 3, req_tool: "Pickaxe", desc: "Forged iron illuminating armature.", light: 160 },
  [BOOKSHELF]: { name: "Oak Bookshelf", hardness: 1.2, mohs: 2.5, color: "#8c5a37", drop: BOOKSHELF, req_tier: 0, req_tool: "Axe", desc: "Timber casing with research tomes." },
  [IRON_BARS]: { name: "Iron Bars", hardness: 2.4, mohs: 5.5, color: "#aaafbe", drop: IRON_BARS, req_tier: 2, req_tool: "Pickaxe", desc: "Ductile forged security lattice." },
  [PERIDOTITE]: { name: "Peridotite", hardness: 3.2, mohs: 6.5, color: "#415f3c", drop: PERIDOTITE, req_tier: 3, req_tool: "Pickaxe", desc: "Dense coarse Upper Mantle rock.", xp: 25 },
  [BASALT]: { name: "Dense Basalt", hardness: 3.8, mohs: 6.0, color: "#2d2d37", drop: BASALT, req_tier: 3, req_tool: "Pickaxe", desc: "Aphanitic mafic volcanic rock.", xp: 30 },
  [OBSIDIAN]: { name: "Mantle Obsidian", hardness: 5.0, mohs: 6.0, color: "#1c1428", drop: "Obsidian", req_tier: 4, req_tool: "Pickaxe", desc: "Conchoidal volcanic glass.", xp: 60 },
  [MAGMA_STONE]: { name: "Magma Stone", hardness: 4.2, mohs: 7.0, color: "#9b3719", drop: MAGMA_STONE, req_tier: 4, req_tool: "Pickaxe", desc: "Superheated Lower Mantle thermal block.", xp: 45, light: 70 },
  [MOLTEN_CORE]: { name: "Molten Iron Slag", hardness: 5.5, mohs: 7.5, color: "#eb6914", drop: "Liquid Iron", req_tier: 5, req_tool: "Drill", desc: "Superpressured molten iron-nickel.", xp: 80, light: 120 },
  [INNER_CORE_METAL]: { name: "Solid Core Alloy", hardness: 6.5, mohs: 8.5, color: "#e1e1f5", drop: "Core Metal", req_tier: 5, req_tool: "Drill", desc: "Crystalline iron-nickel under 330 GPa.", xp: 140, light: 80 },
  [CORE_CRYSTAL]: { name: "Inner Core Shard", hardness: 8.0, mohs: 9.5, color: "#fff096", drop: "Core Shard", req_tier: 5, req_tool: "Drill", desc: "Harmonic energy crystal from Earth's core.", xp: 250, light: 150 },
  [LAVA]: { name: "Liquid Lava", hardness: 999, mohs: 0.0, color: "#ff550a", drop: null, req_tier: 0, req_tool: "Bucket", desc: "Viscous molten silicate melt.", light: 145, liquid: true },

  [LAUNCHPAD]: { name: "Aerospace Launchpad", hardness: 3.2, mohs: 6.5, color: "#4b5064", drop: LAUNCHPAD, req_tier: 3, req_tool: "Pickaxe", desc: "Station for assembling & launching Rockets.", light: 100 },
  [ASSEMBLER]: { name: "Circuit Assembler", hardness: 2.5, mohs: 5.5, color: "#237387", drop: ASSEMBLER, req_tier: 2, req_tool: "Pickaxe", desc: "Precision fabricator for electronics." },
  [PARTICLE_COLLIDER]: { name: "Particle Collider", hardness: 4.5, mohs: 7.5, color: "#9632d2", drop: PARTICLE_COLLIDER, req_tier: 4, req_tool: "Pickaxe", desc: "Synchrotron for antimatter synthesis.", light: 130 },

  [STONE_PILLAR]: { name: "Stone Pillar", hardness: 1.8, mohs: 5.5, color: "#a0a0a8", drop: STONE_PILLAR, req_tier: 1, req_tool: "Pickaxe", desc: "Classical carved architectural pillar." },
  [MARBLE_BLOCK]: { name: "Marble Block", hardness: 1.6, mohs: 4.5, color: "#ebf0f5", drop: MARBLE_BLOCK, req_tier: 1, req_tool: "Pickaxe", desc: "Pristine calcitic metamorphic rock." },
  [NEON_LAMP]: { name: "Neon Cyber-Lamp", hardness: 0.6, mohs: 3.0, color: "#50ffdc", drop: NEON_LAMP, req_tier: 1, req_tool: "Any", desc: "High-efficiency argon luminary.", light: 180 },
  [TECH_PLATING]: { name: "Hull Plating", hardness: 3.6, mohs: 6.5, color: "#373c4b", drop: TECH_PLATING, req_tier: 3, req_tool: "Pickaxe", desc: "Titanium alloy structural plating." },
  [WOOD_TABLE]: { name: "Oak Table", hardness: 1.0, mohs: 2.5, color: "#9b6941", drop: WOOD_TABLE, req_tier: 0, req_tool: "Axe", desc: "Rustic domestic timber table." },
  [WOOD_CHAIR]: { name: "Oak Chair", hardness: 0.7, mohs: 2.5, color: "#915f37", drop: WOOD_CHAIR, req_tier: 0, req_tool: "Axe", desc: "Sturdy carved wooden chair." },
  [CRYSTAL_GLASS]: { name: "Crystal Glass", hardness: 1.0, mohs: 6.5, color: "#bef0ff", drop: CRYSTAL_GLASS, req_tier: 1, req_tool: "Pickaxe", desc: "Diamond-reinforced blast glass." }
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
  "Iron Dagger": { type: "weapon", dmg: 14, speed: 12, desc: "Swift stabbing blade. High speed." },
  "Iron Sword": { type: "weapon", dmg: 18, desc: "Tempered steel blade. 18 damage." },
  "Iron Halberd": { type: "weapon", dmg: 22, reach: 58, desc: "Long thrust polearm. Great reach." },
  "Gold Sword": { type: "weapon", dmg: 24, desc: "Gilded royal longsword. 24 damage." },
  "Obsidian Blade": { type: "weapon", dmg: 28, desc: "Vitreous obsidian cleaver. 28 damage." },
  "Diamond Blade": { type: "weapon", dmg: 34, desc: "Flawless diamond broadsword. 34 damage." },
  "Core Blade": { type: "weapon", dmg: 42, desc: "Crystalline Inner Core Greatsword. 42 dmg." },
  "Core Hammer": { type: "weapon", dmg: 48, tool_type: "hammer", tier: 5, mult: 2.2, desc: "Tier 5: Crushing seismic hammer." },
  "Titanium Battleaxe": { type: "weapon", dmg: 50, desc: "Heavy Martian dual-bladed war axe." },
  "Magma Claymore": { type: "weapon", dmg: 58, desc: "Infused with Ionian heat. Blasts targets." },
  "Dark Matter Blade": { type: "weapon", dmg: 85, desc: "Plutonian blade tearing molecular bonds." },
  "Infinity Singularity Blade": { type: "weapon", dmg: 220, desc: "The apex weapon of Omega Prime." },

  "Wood Shortbow": { type: "ranged", dmg: 10, desc: "Handcrafted bow. Fires arrows." },
  "Iron Crossbow": { type: "ranged", dmg: 20, desc: "Mechanical iron crossbow. High velocity." },
  "Titanium Repeater": { type: "ranged", dmg: 45, desc: "Rapid-fire aerospace alloy repeater." },
  "Thermal Pulse Rifle": { type: "ranged", dmg: 65, desc: "Ionian geothermal beam launcher." },
  "Tachyon Bow": { type: "ranged", dmg: 110, desc: "Bow firing faster-than-light beams." },
  "Antimatter Annihilator": { type: "ranged", dmg: 150, desc: "Proximan cataclysmic blaster." },
  "Arcane Flame Wand": { type: "magic", dmg: 16, desc: "Fires fiery magic sparks." },
  "Frost Scepter": { type: "magic", dmg: 30, desc: "Europan cryo bolt projector." },
  "Helium Plasma Wand": { type: "magic", dmg: 52, desc: "Lunar fusion-charged arcane caster." },

  "Wood Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 1, mult: 1.3, desc: "Tier 1: 1.3x speed on Stone & Coal." },
  "Wood Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 1.4, desc: "Tier 0: 1.4x wood speed." },
  "Wood Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 1.6, desc: "Tier 0: 1.6x dirt speed." },

  "Stone Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 2, mult: 1.8, desc: "Tier 2: 1.8x speed. Cracks Iron Ore." },
  "Stone Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 2.1, desc: "Tier 0: 2.1x wood speed." },
  "Stone Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 2.4, desc: "Tier 0: 2.4x dirt speed." },

  "Iron Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 3, mult: 2.6, desc: "Tier 3: 2.6x speed. Gold & Basalt." },
  "Iron Axe": { type: "tool", tool_type: "axe", tier: 0, mult: 3.0, desc: "Tier 0: 3.0x wood speed." },
  "Iron Shovel": { type: "tool", tool_type: "shovel", tier: 0, mult: 3.4, desc: "Tier 0: 3.4x dirt speed." },

  "Gold Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 3, mult: 3.6, desc: "Tier 3: 3.6x speed. Fast but soft." },
  "Obsidian Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 3.0, desc: "Tier 4: 3.0x speed. Magma Stone." },
  "Diamond Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 4.4, desc: "Tier 4: 4.4x speed. Heavy pick." },
  "Titanium Pickaxe": { type: "tool", tool_type: "pickaxe", tier: 4, mult: 5.2, desc: "Tier 4: 5.2x speed. Aerospace alloy." },
  "Cryo Breaker": { type: "tool", tool_type: "pickaxe", tier: 5, mult: 6.0, desc: "Tier 5: 6.0x speed. Ultrasonic pick." },
  "Core Drill": { type: "tool", tool_type: "drill", tier: 5, mult: 7.5, desc: "Tier 5: 7.5x speed. Ultra-pressure drill." },

  "Dynamite": { type: "explosive", desc: "High explosive stick. Blasts 3x3 tiles on click." },
  "Prospecting Scanner": { type: "scanner", desc: "Geological pulse detector. Pings ore veins." },

  "Oxygen Tank": { type: "accessory", desc: "Provides life support in planetary vacuum." },
  "Gravity Stabilizer": { type: "accessory", desc: "Normalizes planetary gravity to 1.0g." },
  "Mining Charm": { type: "accessory", desc: "Grants +35% mining speed bonus." },

  "Iron Helmet": { type: "armor", slot: "helmet", defense: 4, desc: "Hardened headgear. +4 Defense." },
  "Thermal Suit": { type: "armor", slot: "chest", defense: 8, desc: "Nullifies Mantle thermal radiation." },
  "Acid-Resistant Suit": { type: "armor", slot: "chest", defense: 14, desc: "Venusian suit. Immune to acid & heat." },
  "Core Exosuit": { type: "armor", slot: "chest", defense: 24, desc: "Withstands 330+ GPa pressure." },
  "Core Striders": { type: "armor", slot: "boots", defense: 6, desc: "Reinforced boots. +6 Defense & Lava Mobility." },

  "Health Potion": { type: "consumable", heal: 50, desc: "Restores 50 HP immediately." },
  "Swiftness Elixir": { type: "consumable", buff: "speed", desc: "Increases sprint velocity by 50% for 30s." },
  "Hyper-Shield Flask": { type: "consumable", heal: 120, desc: "Nanotech emergency repair. Heals 120 HP." },

  "Planetary Dynamo": { type: "victory", desc: "THE REIGNITION CORE! Restores Earth's magnetic dynamo!" },
  "Micro Circuit": { type: "material", desc: "Printed semiconductor board for electronics." },
  "Quantum Processor": { type: "material", desc: "Superconducting quantum computing matrix." },
  "Warp Drive Coil": { type: "material", desc: "Spacetime magnetic confinement coil." },
  "Iron Ingot": { type: "material", desc: "Refined ferric bar smelted from iron ore." },
  "Gold Ingot": { type: "material", desc: "Gleaming pure gold bullion." },
  "Titanium Ingot": { type: "material", desc: "High-tensile rocket hull plating ingot." },
  "Coal": { type: "material", desc: "Fossil fuel for torches & furnaces." },
  "Iron Ore": { type: "material", desc: "Raw unrefined ferric mineral." },
  "Gold Ore": { type: "material", desc: "Valuable conductive metallic element." },
  "Diamond": { type: "material", desc: "Ultra-hard tetrahedral diamond crystal." },
  "Obsidian": { type: "material", desc: "Extremely hard vitrified silicate." },
  "Core Metal": { type: "material", desc: "Inner core iron-nickel alloy." },
  "Core Shard": { type: "material", desc: "Harmonic energy crystal from Earth's center." },

  "Helium-3": { type: "material", desc: "Lunar fusion propellant isotope." },
  "Titanium Ore": { type: "material", desc: "Martian aerospace metal ore." },
  "Sulfur": { type: "material", desc: "Venusian reactive chemical reagent." },
  "Cinnabar": { type: "material", desc: "Hermian thermal crystal." },
  "Lithium Brine": { type: "material", desc: "Europan battery electrolyte." },
  "Hydrocarbon": { type: "material", desc: "Titanian polymer fluid." },
  "Pyroclastic Ore": { type: "material", desc: "Ionian volcanic geothermal core." },
  "Deuterium": { type: "material", desc: "Enceladan fusion propellant." },
  "Palladium": { type: "material", desc: "Cerean catalytic shielding metal." },
  "Neodymium": { type: "material", desc: "Tritonian magnetic mineral." },
  "Dark Matter": { type: "material", desc: "Plutonian gravitational essence." },
  "Tachyon Shard": { type: "material", desc: "Sednan superluminal crystal." },
  "Antimatter": { type: "material", desc: "Proximan annihilation cluster." },
  "Chronos Crystal": { type: "material", desc: "Gliesian temporal shard." },
  "Singularity Core": { type: "material", desc: "Omega Prime micro-engine core." }
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
// =============================================================================
// ASTROSTRATA: REIGNITION — COMPLETE ZERO-DEPENDENCY ENGINE (PART 2 / 4)
// UI Helpers, Mobile/Tablet Controls, Texture Atlas & Audio/Lighting Engines
// =============================================================================

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
    return { canDamage: false, canDrop: false, effMult: 0.0, msg: "DEFLECTED (Tool Weak)" };
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
    return { canDamage: true, canDrop: false, effMult: 0.25, msg: "Wrong Tool (No Drop)" };
  }
  if (cap.tier < reqTier) {
    return { canDamage: true, canDrop: false, effMult: 0.40, msg: "Chipping (Tier Low)" };
  }
  return { canDamage: true, canDrop: true, effMult: cap.mult, msg: "Harvestable" };
}

// Adaptive Phone & Tablet Touch Layout Detection
const isPhoneDevice = (('ontouchstart' in window) || navigator.maxTouchPoints > 0) &&
                      Math.min(window.screen.width, window.screen.height) < 520;

const TOUCH_CONTROLS = {
  // Left Hand: Movement
  btnLeft: {
    id: "left",
    x: isPhoneDevice ? 52 : 40,
    y: SCREEN_HEIGHT - (isPhoneDevice ? 145 : 135),
    w: isPhoneDevice ? 84 : 76,
    h: isPhoneDevice ? 84 : 76,
    pad: isPhoneDevice ? 18 : 14,
    label: "◀"
  },
  btnRight: {
    id: "right",
    x: isPhoneDevice ? 148 : 126,
    y: SCREEN_HEIGHT - (isPhoneDevice ? 145 : 135),
    w: isPhoneDevice ? 84 : 76,
    h: isPhoneDevice ? 84 : 76,
    pad: isPhoneDevice ? 18 : 14,
    label: "▶"
  },

  // Right Hand: Action & Jump
  btnJump: {
    id: "jump",
    x: SCREEN_WIDTH - (isPhoneDevice ? 165 : 145),
    y: SCREEN_HEIGHT - (isPhoneDevice ? 235 : 215),
    w: isPhoneDevice ? 94 : 84,
    h: isPhoneDevice ? 82 : 76,
    pad: isPhoneDevice ? 18 : 14,
    label: "JUMP"
  },
  btnMine: {
    id: "mine",
    x: SCREEN_WIDTH - (isPhoneDevice ? 215 : 195),
    y: SCREEN_HEIGHT - (isPhoneDevice ? 140 : 130),
    w: isPhoneDevice ? 84 : 76,
    h: isPhoneDevice ? 84 : 76,
    pad: isPhoneDevice ? 18 : 14,
    label: "DIG"
  },
  btnPlace: {
    id: "place",
    x: SCREEN_WIDTH - (isPhoneDevice ? 115 : 105),
    y: SCREEN_HEIGHT - (isPhoneDevice ? 140 : 130),
    w: isPhoneDevice ? 84 : 76,
    h: isPhoneDevice ? 84 : 76,
    pad: isPhoneDevice ? 18 : 14,
    label: "USE"
  },

  // Top Utility Bar
  btnHeal: {
    id: "heal",
    x: SCREEN_WIDTH - (isPhoneDevice ? 190 : 180),
    y: 16,
    w: isPhoneDevice ? 78 : 72,
    h: isPhoneDevice ? 42 : 38,
    pad: 10,
    label: "HEAL"
  },
  btnInv: {
    id: "inv",
    x: SCREEN_WIDTH - (isPhoneDevice ? 102 : 95),
    y: 16,
    w: isPhoneDevice ? 78 : 72,
    h: isPhoneDevice ? 42 : 38,
    pad: 10,
    label: "INV"
  }
};

// ==========================================
// UNIFIED SPRITE & TEXTURE ATLAS (SINGLE CANVAS)
// Prevents Safari GPU Process Crashes & Memory Leaks
// ==========================================
class UnifiedTextureAtlas {
  constructor() {
    this.atlas = document.createElement("canvas");
    this.atlas.width = 512;
    this.atlas.height = 512;
    this.ctx = this.atlas.getContext("2d");
    this.coords = new Map();
    this.nextIndex = 0;
    this._bakeAll();
  }

  _allocSlot(key) {
    const idx = this.nextIndex++;
    const col = idx % 16;
    const row = Math.floor(idx / 16);
    const pos = { sx: col * 32, sy: row * 32 };
    this.coords.set(key, pos);
    return pos;
  }

  get(key) {
    return this.coords.get(key) || null;
  }

  draw(targetCtx, key, dx, dy, dw = 32, dh = 32) {
    const pos = this.coords.get(key);
    if (!pos) return;
    targetCtx.drawImage(this.atlas, pos.sx, pos.sy, 32, 32, dx, dy, dw, dh);
  }

  _hexToRgb(hex) {
    const c = (hex || "#787880").replace("#", "");
    return {
      r: parseInt(c.substring(0, 2), 16) || 120,
      g: parseInt(c.substring(2, 4), 16) || 120,
      b: parseInt(c.substring(4, 6), 16) || 128
    };
  }

  _bakeAll() {
    const ctx = this.ctx;

    // 1. Bake Blocks into Atlas
    for (const [bidStr, data] of Object.entries(BLOCK_DATA)) {
      const bid = Number(bidStr);
      const { sx, sy } = this._allocSlot("b_" + bid);
      const base = this._hexToRgb(data.color);
      const hi = `rgb(${Math.min(255, base.r + 45)}, ${Math.min(255, base.g + 45)}, ${Math.min(255, base.b + 45)})`;
      const mid = `rgb(${Math.floor(base.r * 0.82)}, ${Math.floor(base.g * 0.82)}, ${Math.floor(base.b * 0.82)})`;
      const dark = `rgb(${Math.floor(base.r * 0.58)}, ${Math.floor(base.g * 0.58)}, ${Math.floor(base.b * 0.58)})`;

      ctx.save();
      ctx.translate(sx, sy);
      ctx.fillStyle = data.color;
      ctx.fillRect(0, 0, 32, 32);

      if (bid === GRASS) {
        ctx.fillStyle = "#6e4628";
        ctx.fillRect(0, 8, 32, 24);
        for (let x = 0; x < 32; x++) {
          const rootLen = 7 + (x * 7 % 6);
          for (let y = 0; y < rootLen; y++) {
            ctx.fillStyle = (y < 2) ? "#8ae63c" : (y < 5) ? "#4b9128" : "#2d6e14";
            ctx.fillRect(x, y, 1, 1);
          }
        }
      } else if (bid === CHEST) {
        ctx.fillStyle = "#8c5a2d";
        ctx.fillRect(2, 2, 28, 28);
        ctx.strokeStyle = "#462814";
        ctx.lineWidth = 2;
        ctx.strokeRect(2, 2, 28, 28);
        ctx.beginPath(); ctx.moveTo(2, 13); ctx.lineTo(29, 13); ctx.stroke();
        ctx.fillStyle = "#ffd700";
        ctx.fillRect(14, 10, 4, 6);
      } else if (data.name.includes("Ore") || data.name.includes("Crystal") || data.name.includes("Shard")) {
        ctx.fillStyle = "#6e6e76";
        ctx.fillRect(0, 0, 32, 32);
        const gems = [[8, 8, 5], [22, 10, 4], [11, 22, 6], [23, 23, 5]];
        for (const [gx, gy, gr] of gems) {
          ctx.fillStyle = dark;
          ctx.beginPath(); ctx.arc(gx, gy, gr + 1, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = data.color;
          ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = hi; ctx.fillRect(gx - 1, gy - 2, 2, 2);
          ctx.fillStyle = "#ffffff"; ctx.fillRect(gx, gy - 1, 1, 1);
        }
      } else if (bid === WOOD) {
        ctx.fillStyle = "#784b28";
        ctx.fillRect(0, 0, 32, 32);
        for (let x = 0; x < 32; x += 4) {
          ctx.fillStyle = (x % 8 === 0) ? "#553219" : "#8c5a32";
          ctx.fillRect(x, 0, 2, 32);
        }
      } else if (bid === PLANKS) {
        ctx.fillStyle = "#af7d46";
        ctx.fillRect(0, 0, 32, 32);
        for (const py of [10, 21]) {
          ctx.fillStyle = "#5a3c1e"; ctx.fillRect(0, py, 32, 2);
          ctx.fillStyle = "#d7a569"; ctx.fillRect(0, py + 2, 32, 1);
        }
      } else if (bid === WORKBENCH) {
        ctx.fillStyle = "#9b6941"; ctx.fillRect(0, 0, 32, 32);
        ctx.fillStyle = "#5a371e"; ctx.fillRect(0, 0, 32, 6);
        ctx.fillStyle = "#e1b478"; ctx.fillRect(0, 6, 32, 2);
        ctx.fillStyle = "#3c2314"; ctx.fillRect(4, 12, 10, 8); ctx.fillRect(18, 12, 10, 8);
      } else if (bid === FURNACE) {
        ctx.fillStyle = "#64646e"; ctx.fillRect(0, 0, 32, 32);
        ctx.fillStyle = "#323237"; ctx.fillRect(6, 12, 20, 16);
        ctx.fillStyle = "#ff550a"; ctx.fillRect(9, 16, 14, 10);
        ctx.fillStyle = "#ffdd4b"; ctx.fillRect(12, 19, 8, 5);
      } else if (bid === STONE_BRICKS || bid === BASALT_BRICKS) {
        ctx.fillStyle = (bid === STONE_BRICKS) ? "#828287" : "#32323c";
        ctx.fillRect(0, 0, 32, 32);
        ctx.strokeStyle = (bid === STONE_BRICKS) ? "#46464b" : "#191923";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 16, 10); ctx.strokeRect(16, 0, 16, 10);
        ctx.strokeRect(8, 10, 16, 11);
        ctx.strokeRect(0, 21, 16, 11); ctx.strokeRect(16, 21, 16, 11);
      } else if (bid === GLASS || bid === CRYSTAL_GLASS) {
        ctx.fillStyle = (bid === CRYSTAL_GLASS) ? "rgba(190, 240, 255, 0.45)" : "rgba(175, 225, 240, 0.35)";
        ctx.fillRect(0, 0, 32, 32);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)"; ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, 30, 30);
      } else if (bid === TORCH) {
        ctx.clearRect(0, 0, 32, 32);
        ctx.fillStyle = "#7d502d"; ctx.fillRect(14, 12, 5, 17);
        ctx.fillStyle = "#ffb428"; ctx.beginPath(); ctx.arc(16, 9, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#ff4600"; ctx.beginPath(); ctx.arc(16, 9, 3, 0, Math.PI * 2); ctx.fill();
      } else if (bid === LANTERN) {
        ctx.clearRect(0, 0, 32, 32);
        ctx.fillStyle = "#2d323c"; ctx.fillRect(10, 8, 12, 18);
        ctx.fillStyle = "#ffd24b"; ctx.fillRect(12, 11, 8, 12);
      } else if (bid === LAVA) {
        ctx.fillStyle = "#eb460a"; ctx.fillRect(0, 0, 32, 32);
        ctx.fillStyle = "#ffaf1e"; ctx.fillRect(0, 0, 32, 8);
      }

      if (![AIR, LAVA, TORCH, LANTERN, GLASS, CRYSTAL_GLASS].includes(bid)) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.28)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 31); ctx.lineTo(0, 0); ctx.lineTo(31, 0); ctx.stroke();
        ctx.strokeStyle = "rgba(0, 0, 0, 0.45)";
        ctx.beginPath(); ctx.moveTo(31, 0); ctx.lineTo(31, 31); ctx.lineTo(0, 31); ctx.stroke();
      }
      ctx.restore();
    }

    // 2. Bake Items, Weapons, Tools, & Armor into Atlas
    for (const [name, idata] of Object.entries(ITEM_DEFINITIONS)) {
      const { sx, sy } = this._allocSlot("i_" + name);
      const tColor = name.includes("Wood") ? "#966432" :
                     name.includes("Stone") ? "#9696a0" :
                     name.includes("Iron") ? "#dce1ec" :
                     name.includes("Gold") ? "#ffd700" :
                     name.includes("Diamond") ? "#50e1ff" :
                     name.includes("Obsidian") ? "#6e37b4" :
                     name.includes("Titanium") ? "#78a0c8" :
                     name.includes("Cryo") ? "#a0f0ff" :
                     name.includes("Core") ? "#ff461e" :
                     name.includes("Singularity") ? "#b432ff" : "#5adcff";

      ctx.save();
      ctx.translate(sx, sy);

      if (idata.tool_type === "pickaxe" || name.includes("Pickaxe")) {
        ctx.strokeStyle = "#643c1e"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(7, 25); ctx.lineTo(21, 11); ctx.stroke();
        ctx.strokeStyle = tColor; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(23, 9, 9, Math.PI * 0.75, Math.PI * 1.6); ctx.stroke();
      } else if (idata.tool_type === "axe" || name.includes("Axe")) {
        ctx.strokeStyle = "#643c1e"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(7, 25); ctx.lineTo(22, 10); ctx.stroke();
        ctx.fillStyle = tColor;
        ctx.beginPath(); ctx.moveTo(18, 5); ctx.lineTo(27, 8); ctx.lineTo(23, 17); ctx.lineTo(16, 12); ctx.fill();
      } else if (idata.tool_type === "shovel" || name.includes("Shovel")) {
        ctx.strokeStyle = "#643c1e"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(7, 25); ctx.lineTo(21, 11); ctx.stroke();
        ctx.fillStyle = tColor; ctx.beginPath(); ctx.arc(23, 9, 6, 0, Math.PI * 2); ctx.fill();
      } else if (idata.type === "weapon" || name.includes("Blade") || name.includes("Sword") || name.includes("Dagger")) {
        ctx.strokeStyle = "#ffd700"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(8, 18); ctx.lineTo(14, 24); ctx.stroke();
        ctx.strokeStyle = "#503219"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(6, 26); ctx.lineTo(10, 22); ctx.stroke();
        ctx.strokeStyle = tColor; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(11, 21); ctx.lineTo(26, 6); ctx.stroke();
      } else if (idata.type === "armor") {
        ctx.fillStyle = tColor;
        if (idata.slot === "helmet") {
          ctx.fillRect(7, 8, 18, 14); ctx.clearRect(11, 15, 10, 4);
        } else if (idata.slot === "boots") {
          ctx.fillRect(6, 14, 8, 12); ctx.fillRect(18, 14, 8, 12);
        } else {
          ctx.fillRect(6, 6, 20, 18); ctx.clearRect(12, 6, 8, 5);
        }
      } else if (idata.type === "consumable" || name.includes("Potion") || name.includes("Flask")) {
        ctx.fillStyle = "#b48c50"; ctx.fillRect(14, 5, 4, 3);
        ctx.fillStyle = name.includes("Health") ? "#e62828" : name.includes("Swift") ? "#ffd700" : "#50dcff";
        ctx.beginPath(); ctx.arc(16, 20, 8, 0, Math.PI * 2); ctx.fill();
      } else if (idata.type === "rocket") {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.moveTo(16, 3); ctx.lineTo(23, 23); ctx.lineTo(9, 23); ctx.closePath(); ctx.fill();
        ctx.fillStyle = tColor; ctx.fillRect(10, 15, 12, 4);
      } else if (name.includes("Ingot")) {
        ctx.fillStyle = tColor;
        ctx.beginPath(); ctx.moveTo(6, 20); ctx.lineTo(11, 11); ctx.lineTo(25, 11); ctx.lineTo(22, 20); ctx.closePath(); ctx.fill();
      } else {
        ctx.fillStyle = tColor; ctx.beginPath(); ctx.arc(16, 16, 7, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }

    // 3. Bake Crack Overlays into Atlas
    for (let stage = 0; stage < 10; stage++) {
      const { sx, sy } = this._allocSlot("crack_" + stage);
      ctx.save();
      ctx.translate(sx, sy);
      ctx.strokeStyle = `rgba(0, 0, 0, ${0.48 + stage * 0.05})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(16, 16); ctx.lineTo(16 - stage * 1.5, 16 + stage * 1.4);
      ctx.moveTo(16, 16); ctx.lineTo(16 + stage * 1.5, 16 - stage * 1.3);
      if (stage > 4) {
        ctx.moveTo(16, 16); ctx.lineTo(16 - stage, 16 - stage * 1.4);
        ctx.moveTo(16, 16); ctx.lineTo(16 + stage * 1.4, 16 + stage);
      }
      ctx.stroke();
      ctx.restore();
    }
  }
}

// ==========================================
// PROCEDURAL AUDIO SYNTHESIZER
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
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
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
// PRE-BAKED RADIAL LIGHTING ENGINE
// Zero per-frame gradient allocations (Maintains 60 FPS on Mobile)
// ==========================================
class OptimizedLighting {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = LIGHT_W;
    this.canvas.height = LIGHT_H;
    this.ctx = this.canvas.getContext("2d");

    this.stamps = {};
    for (const r of [16, 24, 35, 45]) {
      const cvs = document.createElement("canvas");
      cvs.width = r * 2;
      cvs.height = r * 2;
      const c = cvs.getContext("2d");
      const g = c.createRadialGradient(r, r, 2, r, r, r);
      g.addColorStop(0, "rgba(255, 225, 160, 0.95)");
      g.addColorStop(0.45, "rgba(255, 185, 90, 0.45)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      c.fillStyle = g;
      c.fillRect(0, 0, r * 2, r * 2);
      this.stamps[r] = cvs;
    }
  }

  _getStamp(rad) {
    if (rad <= 18) return { stamp: this.stamps[16], r: 16 };
    if (rad <= 28) return { stamp: this.stamps[24], r: 24 };
    if (rad <= 38) return { stamp: this.stamps[35], r: 35 };
    return { stamp: this.stamps[45], r: 45 };
  }

  render(mainCtx, player, world, camX, camY) {
    const pTy = Math.floor(player.y / TILE_SIZE);
    let amb = "#28262a";
    if (world.current_planet === "Earth") {
      if (pTy < CRUST_SURFACE) amb = "#b0b0ba";
      else if (pTy < CRUST_BOTTOM) amb = "#28262a";
      else if (pTy < UPPER_MANTLE_BOTTOM) amb = "#231c1e";
      else if (pTy < LOWER_MANTLE_BOTTOM) amb = "#502819";
      else if (pTy < OUTER_CORE_BOTTOM) amb = "#964b14";
      else amb = "#b4aa82";
    } else {
      amb = (pTy < CRUST_SURFACE) ? "#2d2d37" : "#191920";
    }

    this.ctx.fillStyle = amb;
    this.ctx.fillRect(0, 0, LIGHT_W, LIGHT_H);
    this.ctx.globalCompositeOperation = "lighter";

    const px = Math.floor((player.x + player.w / 2 - camX) / LIGHT_SCALE);
    const py = Math.floor((player.y + player.h / 2 - camY) / LIGHT_SCALE);
    const pStamp = this.stamps[35];
    if (pStamp) {
      this.ctx.drawImage(pStamp, px - 35, py - 35);
    }

    const minTx = Math.max(0, Math.floor(camX / TILE_SIZE));
    const maxTx = Math.min(world.width, Math.ceil((camX + SCREEN_WIDTH) / TILE_SIZE));
    const minTy = Math.max(0, Math.floor(camY / TILE_SIZE));
    const maxTy = Math.min(world.height, Math.ceil((camY + SCREEN_HEIGHT) / TILE_SIZE));

    for (let tx = minTx; tx < maxTx; tx++) {
      for (let ty = minTy; ty < maxTy; ty++) {
        const t = world.getTile(tx, ty);
        if (BLOCK_DATA[t] && BLOCK_DATA[t].light) {
          const lx = Math.floor((tx * TILE_SIZE + TILE_SIZE / 2 - camX) / LIGHT_SCALE);
          const ly = Math.floor((ty * TILE_SIZE + TILE_SIZE / 2 - camY) / LIGHT_SCALE);
          const targetRad = Math.floor(BLOCK_DATA[t].light / LIGHT_SCALE);
          const { stamp, r } = this._getStamp(targetRad);
          this.ctx.drawImage(stamp, lx - r, ly - r);
        }
      }
    }

    this.ctx.globalCompositeOperation = "source-over";
    mainCtx.save();
    mainCtx.globalCompositeOperation = "multiply";
    mainCtx.drawImage(this.canvas, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    mainCtx.restore();
  }
}
// =============================================================================
// ASTROSTRATA: REIGNITION — COMPLETE ZERO-DEPENDENCY ENGINE (PART 3 / 4)
// Entities, Particle Dynamics, Physics System & World Generation
// =============================================================================

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
    ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
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
// WORLD GENERATOR & LIQUIDS
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

  _carveCaves(count = 16, length = 55, minY = 35, maxY = 135) {
    for (let c = 0; c < count; c++) {
      let cx = 10 + Math.floor(Math.random() * (this.width - 20));
      let cy = minY + Math.floor(Math.random() * (maxY - minY));
      for (let l = 0; l < length; l++) {
        const radius = Math.random() < 0.4 ? 1 : 2;
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            const tx = cx + dx;
            const ty = cy + dy;
            if (tx >= 1 && tx < this.width - 1 && ty >= minY && ty < this.height - 2) {
              if (![INNER_CORE_METAL, CORE_CRYSTAL].includes(this.tiles[tx][ty])) {
                this.tiles[tx][ty] = AIR;
              }
            }
          }
        }
        cx += Math.floor(Math.random() * 3) - 1;
        cy += Math.floor(Math.random() * 3) - 1;
      }
    }
  }

  _spawnStructures(count = 8, minY = 35, maxY = 125) {
    for (let i = 0; i < count; i++) {
      const rx = 10 + Math.floor(Math.random() * (this.width - 24));
      const ry = minY + Math.floor(Math.random() * (maxY - minY));
      const w = 7 + Math.floor(Math.random() * 5);
      const h = 5 + Math.floor(Math.random() * 3);

      const stType = ["ancient_shrine", "abandoned_lab", "dungeon_room"][Math.floor(Math.random() * 3)];
      const wallBlock = (stType === "ancient_shrine") ? MARBLE_BLOCK : (stType === "abandoned_lab") ? TECH_PLATING : STONE_BRICKS;
      const pillarBlock = (stType === "ancient_shrine") ? STONE_PILLAR : (stType === "abandoned_lab") ? IRON_BARS : BASALT_BRICKS;
      const lightBlock = (stType === "ancient_shrine") ? LANTERN : (stType === "abandoned_lab") ? NEON_LAMP : TORCH;

      for (let dx = 0; dx < w; dx++) {
        for (let dy = 0; dy < h; dy++) {
          const tx = rx + dx;
          const ty = ry + dy;
          if (tx >= 0 && tx < this.width && ty >= 0 && ty < this.height) {
            if (dx === 0 || dx === w - 1 || dy === 0 || dy === h - 1) {
              this.tiles[tx][ty] = wallBlock;
            } else {
              this.tiles[tx][ty] = AIR;
            }
          }
        }
      }

      this.tiles[rx + Math.floor(w / 2)][ry + 1] = lightBlock;
      if (w >= 8) {
        for (let dy = 1; dy < h - 1; dy++) {
          this.tiles[rx + 2][ry + dy] = pillarBlock;
          this.tiles[rx + w - 3][ry + dy] = pillarBlock;
        }
      }

      const floorY = ry + h - 2;
      const midX = rx + Math.floor(w / 2);
      this.tiles[midX][floorY] = WORKBENCH;
      this.tiles[midX - 1][floorY] = WOOD_CHAIR;
      this.tiles[midX + 1][floorY] = CHEST;
    }
  }

  generate(planetName = "Earth") {
    this.current_planet = planetName;
    this.damage_map.clear();
    this.tiles = Array.from({ length: this.width }, () => new Array(this.height).fill(AIR));

    if (planetName === "Earth") {
      this._generateEarth();
    } else {
      this._generateExtraterrestrial(planetName);
    }
  }

  _generateEarth() {
    const heights = [];
    for (let x = 0; x < this.width; x++) {
      const h = Math.floor(CRUST_SURFACE + Math.sin(x * 0.12) * 5 + Math.sin(x * 0.04) * 7);
      heights.push(h);
    }

    for (let x = 0; x < this.width; x++) {
      const g = heights[x];
      for (let y = g; y < this.height; y++) {
        const noise = Math.floor(Math.sin(x * 0.4 + y * 0.2) * 2.5);
        if (y === g) this.tiles[x][y] = GRASS;
        else if (y < g + 5) this.tiles[x][y] = DIRT;
        else if (y < CRUST_BOTTOM + noise) this.tiles[x][y] = STONE;
        else if (y < UPPER_MANTLE_BOTTOM + noise) this.tiles[x][y] = (x + y) % 3 !== 0 ? PERIDOTITE : BASALT;
        else if (y < LOWER_MANTLE_BOTTOM + noise) this.tiles[x][y] = ((x ^ y) % 4 === 0) ? MAGMA_STONE : BASALT;
        else if (y < OUTER_CORE_BOTTOM + noise) this.tiles[x][y] = ((x + y) % 2 === 0) ? MOLTEN_CORE : MAGMA_STONE;
        else this.tiles[x][y] = (Math.random() < 0.22) ? CORE_CRYSTAL : INNER_CORE_METAL;
      }
    }

    this._carveCaves(16, 55, 35, 135);
    this._spawnVein(COAL_ORE, 30, 80, 45, 10, [STONE, DIRT]);
    this._spawnVein(IRON_ORE, 35, 90, 36, 8, [STONE, BASALT]);
    this._spawnVein(GOLD_ORE, 45, 105, 24, 7, [STONE, PERIDOTITE]);
    this._spawnVein(DIAMOND_ORE, 55, 115, 18, 6, [PERIDOTITE, BASALT]);
    this._spawnVein(OBSIDIAN, 70, 130, 20, 9, [BASALT, MAGMA_STONE]);
    this._spawnVein(LAVA, 85, 140, 15, 11, [MAGMA_STONE, MOLTEN_CORE, AIR]);
    this._spawnStructures(9, 38, 115);

    for (let x = 2; x < this.width - 3; x++) {
      const g = heights[x];
      if (x % 6 === 3 && g > 10 && this.tiles[x][g] === GRASS) {
        const trunk = 4 + Math.floor(Math.random() * 3);
        for (let th = 1; th <= trunk; th++) this.tiles[x][g - th] = WOOD;
        for (let lx = x - 2; lx <= x + 2; lx++) {
          for (let ly = g - trunk - 2; ly <= g - trunk; ly++) {
            if (lx >= 0 && lx < this.width && ly >= 0 && ly < this.height && this.tiles[lx][ly] === AIR) {
              this.tiles[lx][ly] = LEAVES;
            }
          }
        }
      }
    }
  }

  _generateExtraterrestrial(pName) {
    const pdata = PLANET_DATA[pName] || PLANET_DATA["Moon"];
    const surfBid = pdata.surface_block;
    const baseBid = pdata.base_block;
    const oreBid = pdata.ore_block;

    const heights = [];
    for (let x = 0; x < this.width; x++) {
      heights.push(Math.floor(CRUST_SURFACE + Math.sin(x * 0.18) * 6 + Math.cos(x * 0.05) * 5));
    }

    for (let x = 0; x < this.width; x++) {
      const g = heights[x];
      for (let y = g; y < this.height; y++) {
        if (y < g + 4) this.tiles[x][y] = surfBid;
        else this.tiles[x][y] = baseBid;
      }
    }

    this._carveCaves(14, 45, 35, 140);
    this._spawnVein(oreBid, 35, 140, 40, 9, [baseBid, surfBid]);
    this._spawnVein(DIAMOND_ORE, 55, 145, 16, 6, [baseBid]);
    this._spawnStructures(6, 36, 120);
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
    if (this.fluid_tick % 8 !== 0) return;

    for (let y = this.height - 2; y >= 1; y--) {
      for (let x = 1; x < this.width - 1; x++) {
        if (this.tiles[x][y] === LAVA) {
          for (const [nx, ny] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
            const nb = this.getTile(nx, ny);
            if ([WOOD, LEAVES, PLANKS, BOOKSHELF, WORKBENCH, WOOD_TABLE, WOOD_CHAIR].includes(nb)) {
              if (Math.random() < 0.35) {
                this.setTile(nx, ny, AIR);
                sound.play("burn");
              }
            }
          }

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

  static getLayerInfo(tileY, planetName = "Earth") {
    if (planetName !== "Earth") {
      const pdata = PLANET_DATA[planetName] || PLANET_DATA["Moon"];
      const depth = Math.max(0, Math.floor((tileY - CRUST_SURFACE) * 12));
      return { name: pdata.name, depth, temp: "Alien Lithosphere", pressure: pdata.hazard };
    }
    if (tileY < CRUST_SURFACE) return { name: "Atmosphere", depth: 0, temp: "22 C", pressure: "1.0 atm" };
    if (tileY < CRUST_BOTTOM) {
      const d = Math.floor((tileY - CRUST_SURFACE) * 13);
      return { name: "Crust", depth: d, temp: `${25 + Math.floor(d * 0.07)} C`, pressure: `${(d * 0.0003).toFixed(2)} GPa` };
    }
    if (tileY < UPPER_MANTLE_BOTTOM) {
      const d = 350 + Math.floor((tileY - CRUST_BOTTOM) * 14.2);
      return { name: "Upper Mantle", depth: d, temp: `${500 + Math.floor((d - 350) * 1.5)} C`, pressure: `${(10 + (d - 350) * 0.03).toFixed(1)} GPa` };
    }
    if (tileY < LOWER_MANTLE_BOTTOM) {
      const d = 750 + Math.floor((tileY - UPPER_MANTLE_BOTTOM) * 15.6);
      return { name: "Lower Mantle", depth: d, temp: `${1100 + Math.floor((d - 750) * 1.8)} C`, pressure: `${(24 + (d - 750) * 0.15).toFixed(1)} GPa` };
    }
    if (tileY < OUTER_CORE_BOTTOM) {
      const d = 1200 + Math.floor((tileY - LOWER_MANTLE_BOTTOM) * 14.8);
      return { name: "Outer Core (Molten)", depth: d, temp: `${2800 + Math.floor((d - 1200) * 3.4)} C`, pressure: `${(135 + (d - 1200) * 0.45).toFixed(1)} GPa` };
    }
    const d = 1550 + Math.floor((tileY - OUTER_CORE_BOTTOM) * 18.2);
    return { name: "Inner Core (Solid)", depth: d, temp: `${5400 + Math.floor((d - 1550) * 1.2)} C`, pressure: `${(330 + (d - 1550) * 0.6).toFixed(1)} GPa` };
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
    if (![AIR, TORCH, LAVA, LANTERN, NEON_LAMP].includes(world.getTile(tx, ty))) {
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
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x - camX + 8, this.y - camY + 6, 3, 3);
    ctx.fillRect(this.x - camX + 16, this.y - camY + 6, 3, 3);
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
    const speed = (ptype === "dynamite") ? 8.0 : (ptype === "pulse") ? 11.5 : 9.5;
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
    const px = Math.floor(this.x - camX);
    const py = Math.floor(this.y - camY);
    if (this.type === "dynamite") {
      ctx.fillStyle = "#dc3232";
      ctx.fillRect(px - 4, py - 4, 8, 8);
    } else if (this.type === "arrow") {
      ctx.strokeStyle = "#e6c88c";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px - this.vx, py - this.vy);
      ctx.lineTo(px, py);
      ctx.stroke();
    } else {
      ctx.fillStyle = (this.type === "ice") ? "#82e1ff" : COLOR_CYAN;
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fill();
    }
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
    const stats = CLASSES[chosenClass] || CLASSES["Warrior"];
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

    this.animTick = 0;
    this.walkPhase = 0.0;
    this.isMoving = false;
    this.attackCooldown = 0;
    this.swingAnim = 0;
    this.speedBuffTimer = 0;
  }

  addXp(amt, floatTexts, sound) {
    this.xp += amt;
    floatTexts.push(new FloatingText(this.x + 10, this.y - 10, `+${amt} XP`, COLOR_EXP));
    while (this.xp >= this.xp_next) {
      this.xp -= this.xp_next;
      this.level++;
      this.xp_next = Math.floor(this.xp_next * 1.45);
      this.max_hp += 18;
      this.hp = this.max_hp;
      this.base_damage += 4;
      this.mine_mult += 0.15;
      sound.play("level_up");
      floatTexts.push(new FloatingText(this.x + 10, this.y - 28, "LEVEL UP!", COLOR_GOLD, 70));
    }
  }

  update(world, keys, sound) {
    this.animTick++;
    this.inLava = false;
    const tx = Math.floor((this.x + this.w / 2) / TILE_SIZE);
    const ty = Math.floor((this.y + this.h / 2) / TILE_SIZE);
    if (world.getTile(tx, ty) === LAVA) this.inLava = true;

    let speedFactor = this.inLava ? 0.45 : 1.0;
    if (this.speedBuffTimer > 0) {
      this.speedBuffTimer--;
      speedFactor *= 1.45;
    }

    let targetVx = 0;
    this.isMoving = false;
    if (keys["KeyA"] || keys["ArrowLeft"]) {
      targetVx = -this.move_speed * speedFactor;
      this.facingRight = false;
      this.isMoving = true;
    }
    if (keys["KeyD"] || keys["ArrowRight"]) {
      targetVx = this.move_speed * speedFactor;
      this.facingRight = true;
      this.isMoving = true;
    }
    this.vx += (targetVx - this.vx) * 0.25;

    if (this.isMoving && this.onGround) this.walkPhase += 0.25;
    else this.walkPhase *= 0.8;

    const pGrav = (this.inv.countItem("Gravity Stabilizer") > 0) ? 0.42 : (PLANET_DATA[world.current_planet]?.gravity || 0.42);

    if (keys["KeyW"] || keys["Space"] || keys["ArrowUp"]) {
      if (this.onGround) {
        this.vy = -8.2 * Math.sqrt(pGrav / 0.42);
        sound.play("jump");
      } else if (this.inLava) {
        this.vy = -3.2;
      }
    }

    this.vy += this.inLava ? 0.16 : pGrav;
    this.vy = Math.min(this.inLava ? 4.2 : 13.0, this.vy);

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
        if (![AIR, TORCH, LAVA, LANTERN, NEON_LAMP, WOOD_TABLE, WOOD_CHAIR].includes(world.getTile(tx, ty))) {
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
        if (![AIR, TORCH, LAVA, LANTERN, NEON_LAMP, WOOD_TABLE, WOOD_CHAIR].includes(world.getTile(tx, ty))) {
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

  draw(ctx, camX, camY, atlas) {
    const dx = Math.floor(this.x - camX);
    const dy = Math.floor(this.y - camY);

    const breath = (!this.isMoving) ? Math.sin(this.animTick * 0.08) * 1.2 : 0;
    const bob = (this.isMoving && this.onGround) ? Math.sin(this.walkPhase * 2) * 1.5 : 0;
    const leg1Off = this.onGround ? Math.sin(this.walkPhase) * 6 : 2;
    const leg2Off = this.onGround ? -Math.sin(this.walkPhase) * 6 : -3;

    if (this.inv.countItem("Oxygen Tank") > 0) {
      const oxX = dx + (this.facingRight ? 1 : 13);
      ctx.fillStyle = "#d2e1f5";
      ctx.fillRect(oxX, dy + 12 + Math.floor(bob), 6, 14);
    }

    ctx.fillStyle = this.color;
    ctx.fillRect(dx + (this.facingRight ? 4 : 10), dy + 24 + bob, 5, 14 + Math.floor(leg2Off));
    ctx.fillRect(dx + (this.facingRight ? 10 : 4), dy + 24 + bob, 5, 14 + Math.floor(leg1Off));

    const torsoY = dy + 10 + Math.floor(bob + breath);
    const chest = this.inv.armor.chest;
    ctx.fillStyle = (chest === "Thermal Suit") ? "#ff6e19" : (chest === "Core Exosuit") ? "#282d3c" : (chest === "Acid-Resistant Suit") ? "#8cd246" : this.color;
    ctx.fillRect(dx + 2, torsoY, 16, 16);

    const headY = dy + Math.floor(bob + breath);
    ctx.fillStyle = "#ebd2b4";
    ctx.fillRect(dx + 3, headY, 14, 11);
    ctx.fillStyle = "#141419";
    const eyeX = dx + (this.facingRight ? 12 : 4);
    ctx.fillRect(eyeX, headY + 4, 3, 3);

    if (this.inv.armor.helmet === "Iron Helmet") {
      ctx.fillStyle = "#b9bece";
      ctx.fillRect(dx + 2, headY - 2, 16, 8);
    }

    const armX = dx + (this.facingRight ? 14 : 2);
    const armY = torsoY + 4;
    ctx.strokeStyle = "#ebd2b4";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(armX, armY);

    if (this.swingAnim > 0) {
      const ang = (this.swingAnim / 10.0) * Math.PI * 0.8;
      const ox = Math.cos(ang) * 22 * (this.facingRight ? 1 : -1);
      const oy = -Math.sin(ang) * 20;
      ctx.lineTo(armX + ox, armY + oy);
      ctx.stroke();

      const sel = this.inv.getSelected();
      if (sel) {
        if (typeof sel.item === "number" || atlas.get("b_" + sel.item)) {
          atlas.draw(ctx, "b_" + sel.item, armX + ox - 12, armY + oy - 12, 24, 24);
        } else {
          atlas.draw(ctx, "i_" + sel.item, armX + ox - 12, armY + oy - 12, 24, 24);
        }
      }
    } else {
      ctx.lineTo(armX + (this.facingRight ? 3 : -3), armY + 12);
      ctx.stroke();
    }
  }
}
// =============================================================================
// ASTROSTRATA: REIGNITION — COMPLETE ZERO-DEPENDENCY ENGINE (PART 4 / 4)
// Main Engine Controller, Unified Draw, Inspector Card & Mobile Bootstrap
// =============================================================================

// =============================================================================
// ASTROSTRATA: REIGNITION — COMPLETE ZERO-DEPENDENCY ENGINE (PART 4 / 4)
// Main Engine Controller, Unified Draw, Inspector Card & Mobile Bootstrap
// =============================================================================

class AstroStrataEngine {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    // Retina / High-DPI crisp rendering
    this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    this.canvas.width = Math.floor(SCREEN_WIDTH * this.dpr);
    this.canvas.height = Math.floor(SCREEN_HEIGHT * this.dpr);

    this.sound = new SoundEngine();
    this.atlas = new UnifiedTextureAtlas();
    this.lighting = new OptimizedLighting();
    this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);

    this.state = "MENU";
    this.worldsList = [];
    this.selectedWorldIdx = 0;
    this.activeWorldKey = null;

    this.inputWorldName = "New Sector";
    this.selectedCreateClass = "Warrior";
    this.nameInputActive = false;

    this.player = null;
    this.enemies = [];
    this.projectiles = [];
    this.particles = [];
    this.floatTexts = [];

    this.cursorItem = null;
    this.selectedInvSlot = null;
    this.camX = 0;
    this.camY = 0;

    this.craftCategory = "ALL";
    this.searchQuery = "";
    this.searchActive = false;
    this.recipeScrollOffset = 0;
    this.planetScrollOffset = 0;
    this.gameWon = false;

    this.keys = {};
    this.mouse = { x: 0, y: 0, down: false, rightDown: false };
    this.soundTimer = 0;
    this.autoSaveTimer = 0;

    this.lockedTargetTile = null;

    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    this.activeTouches = new Map();

    this.loadSectorIndex();
    this.setupListeners();
  }

  // Safe Surface Respawn System (Prevents spawning inside underground rock)
  respawnPlayer() {
    this.player.hp = this.player.max_hp;
    this.player.vx = 0;
    this.player.vy = 0;
    this.player.invulnTimer = 60;

    const spawnTileX = Math.floor(WORLD_WIDTH / 2);
    let spawnTileY = 20;

    for (let y = 0; y < WORLD_HEIGHT; y++) {
      const t = this.world.getTile(spawnTileX, y);
      if (t !== AIR && t !== LAVA) {
        spawnTileY = Math.max(2, y - 2);
        break;
      }
    }

    this.player.x = spawnTileX * TILE_SIZE;
    this.player.y = spawnTileY * TILE_SIZE;
    this.camX = Math.max(0, Math.min(this.player.x - SCREEN_WIDTH / 2, this.world.width * TILE_SIZE - SCREEN_WIDTH));
    this.camY = Math.max(0, Math.min(this.player.y - SCREEN_HEIGHT / 2, this.world.height * TILE_SIZE - SCREEN_HEIGHT));
    this.lockedTargetTile = null;

    this.sound.play("warp");
    this.floatTexts.push(new FloatingText(this.player.x + 10, this.player.y - 20, "SECTOR RESPAWN", COLOR_GOLD, 80));
  }

  performPlayerAttack(targetWorldX, targetWorldY) {
    if (!this.player || this.player.attackCooldown > 0) return false;

    const sel = this.player.inv.getSelected();
    const idata = sel ? (ITEM_DEFINITIONS[sel.item] || {}) : {};
    const pxCenter = this.player.x + this.player.w / 2;
    const pyCenter = this.player.y + this.player.h / 2;

    if (targetWorldX !== pxCenter) {
      this.player.facingRight = targetWorldX > pxCenter;
    }

    if (idata.type === "ranged" || idata.type === "magic") {
      this.player.attackCooldown = 18;
      this.player.swingAnim = 8;
      const ptype = idata.type === "ranged" ? "arrow" : "magic";
      const dmg = Math.round((this.player.base_damage / 2) + (idata.dmg || 12));
      this.projectiles.push(new Projectile(pxCenter, pyCenter, targetWorldX, targetWorldY, dmg, ptype));
      this.sound.play(ptype === "arrow" ? "jump" : "mine_glass");
      return true;
    }

    this.player.attackCooldown = 14;
    this.player.swingAnim = 10;

    let hitAny = false;
    const reach = idata.reach || 75;
    const baseDmg = this.player.base_damage + (idata.dmg || (idata.tool_type ? 4 : 0));

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      const exCenter = e.x + e.w / 2;
      const eyCenter = e.y + e.h / 2;
      const dist = Math.hypot(exCenter - pxCenter, eyCenter - pyCenter);

      if (dist <= reach) {
        hitAny = true;
        const totalDmg = Math.round(baseDmg + (Math.random() * 4 - 2));
        e.hp -= totalDmg;

        e.vx = (this.player.facingRight ? 1 : -1) * 5.5;
        e.vy = -3.8;
        this.sound.play("hurt");
        this.floatTexts.push(new FloatingText(e.x + e.w / 2, e.y - 12, `-${totalDmg}`, COLOR_HP, 45));

        for (let p = 0; p < 6; p++) {
          this.particles.push(new Particle(exCenter, eyCenter, (Math.random() - 0.5) * 4, -1 - Math.random() * 2, e.color, 4, 18));
        }

        if (e.hp <= 0) {
          this.player.addXp(e.max_hp, this.floatTexts, this.sound);
          this.floatTexts.push(new FloatingText(e.x + e.w / 2, e.y - 28, "SLAIN!", COLOR_GOLD, 60));
          this.enemies.splice(i, 1);
        }
      }
    }

    return hitAny;
  }

  drawItemIcon(ctx, key, x, y, w = 32, h = 32) {
    if (typeof key === "number" || this.atlas.get("b_" + key)) {
      this.atlas.draw(ctx, "b_" + key, x, y, w, h);
    } else {
      this.atlas.draw(ctx, "i_" + key, x, y, w, h);
    }
  }

  loadSectorIndex() {
    try {
      const raw = localStorage.getItem(SAVES_INDEX_KEY);
      this.worldsList = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this.worldsList = [];
    }
    if (this.selectedWorldIdx >= this.worldsList.length) {
      this.selectedWorldIdx = Math.max(0, this.worldsList.length - 1);
    }
  }

  saveSectorIndex() {
    try {
      localStorage.setItem(SAVES_INDEX_KEY, JSON.stringify(this.worldsList));
    } catch (e) {}
  }

  saveCurrentSector() {
    if (!this.activeWorldKey || !this.player) return;
    const sectorData = {
      id: this.activeWorldKey,
      player: {
        x: this.player.x,
        y: this.player.y,
        hp: this.player.hp,
        max_hp: this.player.max_hp,
        level: this.player.level,
        xp: this.player.xp,
        xp_next: this.player.xp_next,
        pClass: this.player.pClass,
        slots: this.player.inv.slots,
        armor: this.player.inv.armor
      },
      world: {
        tiles: this.world.tiles,
        planet: this.world.current_planet
      }
    };

    try {
      localStorage.setItem(SECTOR_DATA_PREFIX + this.activeWorldKey, JSON.stringify(sectorData));
      const entry = this.worldsList.find(w => w.id === this.activeWorldKey);
      if (entry) {
        entry.savedAt = new Date().toLocaleDateString();
        entry.planet = this.world.current_planet;
        entry.level = this.player.level;
        this.saveSectorIndex();
      }
    } catch (e) {
      console.warn("Storage quota full or disabled:", e);
    }
  }

  loadSectorGame(sectorId) {
    let data = null;
    const raw = localStorage.getItem(SECTOR_DATA_PREFIX + sectorId);
    if (raw) {
      try {
        data = JSON.parse(raw);
      } catch (e) {
        console.warn("Sector parse error, re-generating sector:", e);
      }
    }

    const sectorMeta = this.worldsList.find(w => w.id === sectorId) || {
      name: "Fallback Sector",
      pClass: "Warrior",
      planet: "Earth"
    };

    if (data && data.world && data.world.tiles && data.player) {
      this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);
      this.world.tiles = data.world.tiles;
      this.world.current_planet = data.world.planet || sectorMeta.planet || "Earth";

      const pData = data.player;
      this.player = new Player(pData.x, pData.y, pData.pClass || sectorMeta.pClass || "Warrior");
      this.player.hp = pData.hp;
      this.player.max_hp = pData.max_hp;
      this.player.level = pData.level;
      this.player.xp = pData.xp;
      this.player.xp_next = pData.xp_next;
      this.player.inv.slots = pData.slots;
      this.player.inv.armor = pData.armor;
    } else {
      this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);
      this.world.generate(sectorMeta.planet || "Earth");

      const spawnX = Math.floor(WORLD_WIDTH / 2) * TILE_SIZE;
      let spawnY = 50 * TILE_SIZE;
      for (let y = 0; y < WORLD_HEIGHT; y++) {
        if (this.world.getTile(Math.floor(WORLD_WIDTH / 2), y) !== AIR) {
          spawnY = (y - 2) * TILE_SIZE;
          break;
        }
      }

      this.player = new Player(spawnX, spawnY, sectorMeta.pClass || "Warrior");
      this.player.inv.addItem("Wood Pickaxe", 1);
      this.player.inv.addItem("Wood Axe", 1);
      this.player.inv.addItem("Wood Sword", 1);
      this.player.inv.addItem(TORCH, 16);
    }

    this.enemies = [new SlimeEnemy(this.player.x + 180, this.player.y - 20, "Crust")];
    this.projectiles = [];
    this.particles = [];
    this.floatTexts = [];
    this.activeWorldKey = sectorId;
    this.selectedInvSlot = null;
    this.lockedTargetTile = null;
    this.state = "PLAYING";
    this.sound.play("craft");
    return true;
  }

  isNearStation(targetBlock) {
    if (!this.player) return false;
    const px = Math.floor((this.player.x + this.player.w / 2) / TILE_SIZE);
    const py = Math.floor((this.player.y + this.player.h / 2) / TILE_SIZE);
    for (let dx = -5; dx <= 5; dx++) {
      for (let dy = -5; dy <= 5; dy++) {
        if (this.world.getTile(px + dx, py + dy) === targetBlock) return true;
      }
    }
    return false;
  }

  newWorldGame(name, chosenClass) {
    try {
      const cleanName = (name && name.trim()) ? name.trim() : `Sector ${this.worldsList.length + 1}`;
      const validClass = CLASSES[chosenClass] ? chosenClass : "Warrior";

      this.world = new World(WORLD_WIDTH, WORLD_HEIGHT);
      this.world.generate("Earth");

      const spawnX = Math.floor(WORLD_WIDTH / 2) * TILE_SIZE;
      let spawnY = 50 * TILE_SIZE;
      for (let y = 0; y < WORLD_HEIGHT; y++) {
        if (this.world.getTile(Math.floor(WORLD_WIDTH / 2), y) !== AIR) {
          spawnY = (y - 2) * TILE_SIZE;
          break;
        }
      }

      this.player = new Player(spawnX, spawnY, validClass);
      this.player.inv.addItem("Wood Pickaxe", 1);
      this.player.inv.addItem("Wood Axe", 1);
      this.player.inv.addItem("Wood Sword", 1);
      this.player.inv.addItem(TORCH, 16);

      this.enemies = [new SlimeEnemy(spawnX + 180, spawnY - 20, "Crust")];
      this.projectiles = [];
      this.particles = [];
      this.floatTexts = [];
      this.gameWon = false;

      const newSector = {
        id: "sec_" + Date.now(),
        name: cleanName,
        pClass: validClass,
        planet: "Earth",
        level: 1,
        savedAt: new Date().toLocaleDateString()
      };

      this.worldsList.push(newSector);
      this.selectedWorldIdx = this.worldsList.length - 1;
      this.activeWorldKey = newSector.id;
      this.selectedInvSlot = null;
      this.saveSectorIndex();
      this.saveCurrentSector();

      this.state = "PLAYING";
    } catch (err) {
      console.error("Critical error in newWorldGame:", err);
      alert("Failed to initialize sector: " + err.message);
    }
  }

  deleteSelectedSector() {
    if (this.worldsList.length === 0) return;
    const target = this.worldsList[this.selectedWorldIdx];
    localStorage.removeItem(SECTOR_DATA_PREFIX + target.id);
    this.worldsList.splice(this.selectedWorldIdx, 1);
    this.selectedWorldIdx = Math.max(0, this.selectedWorldIdx - 1);
    this.saveSectorIndex();
    this.sound.play("break_stone");
  }

  travelToPlanet(targetPlanet) {
    if (targetPlanet === this.world.current_planet) return;
    const pdata = PLANET_DATA[targetPlanet];
    const reqRocket = pdata.req_rocket;

    if (reqRocket && this.player.inv.countItem(reqRocket) === 0) {
      this.floatTexts.push(new FloatingText(this.player.x, this.player.y - 30, `Requires ${reqRocket}!`, COLOR_HP));
      this.sound.play("click");
      return;
    }

    this.sound.play("launch");
    this.world.generate(targetPlanet);

    const spawnX = Math.floor(WORLD_WIDTH / 2) * TILE_SIZE;
    let spawnY = 50 * TILE_SIZE;
    for (let y = 0; y < WORLD_HEIGHT; y++) {
      if (this.world.getTile(Math.floor(WORLD_WIDTH / 2), y) !== AIR) {
        spawnY = (y - 2) * TILE_SIZE;
        break;
      }
    }

    this.player.x = spawnX;
    this.player.y = spawnY;
    this.world.setTile(Math.floor(WORLD_WIDTH / 2) - 2, Math.floor(spawnY / TILE_SIZE) + 2, LAUNCHPAD);

    this.state = "PLAYING";
    this.floatTexts.push(new FloatingText(this.player.x, this.player.y - 40, `TOUCHDOWN: ${pdata.name.toUpperCase()}!`, COLOR_CYAN, 90));
    this.saveCurrentSector();
  }

  lootChest(gx, gy) {
    this.sound.play("craft");
    const lootPool = [
      [TORCH, 6],
      ["Coal", 5],
      ["Iron Ingot", 2],
      ["Health Potion", 1],
      [PLANKS, 8],
      ["Dynamite", 1],
      ["Gold Ingot", 1]
    ];
    const reward = lootPool[Math.floor(Math.random() * lootPool.length)];
    this.player.inv.addItem(reward[0], reward[1]);
    const rName = BLOCK_DATA[reward[0]]?.name || reward[0];
    this.floatTexts.push(new FloatingText(gx * TILE_SIZE, gy * TILE_SIZE, `Looted: ${rName} x${reward[1]}`, COLOR_GOLD, 75));
    this.world.setTile(gx, gy, AIR);
  }

  triggerRadarScanner() {
    const px = Math.floor((this.player.x + this.player.w / 2) / TILE_SIZE);
    const py = Math.floor((this.player.y + this.player.h / 2) / TILE_SIZE);
    let count = 0;
    this.sound.play("radar");

    for (let dx = -14; dx <= 14; dx++) {
      for (let dy = -14; dy <= 14; dy++) {
        const t = this.world.getTile(px + dx, py + dy);
        if (BLOCK_DATA[t]?.name?.includes("Ore") || BLOCK_DATA[t]?.name?.includes("Crystal")) {
          count++;
          this.particles.push(new Particle((px + dx) * TILE_SIZE + 16, (py + dy) * TILE_SIZE + 16, 0, 0, BLOCK_DATA[t].color, 4, 30));
        }
      }
    }
    this.floatTexts.push(new FloatingText(this.player.x, this.player.y - 25, `Sonar: ${count} Ores Found`, COLOR_CYAN, 60));
  }

  setupListeners() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;

      if (this.state === "CREATE_WORLD" && this.nameInputActive) {
        if (e.key === "Enter") this.nameInputActive = false;
        else if (e.key === "Backspace") this.inputWorldName = this.inputWorldName.slice(0, -1);
        else if (this.inputWorldName.length < 18 && e.key.length === 1) this.inputWorldName += e.key;
        return;
      }

      if (this.state === "INVENTORY" && this.searchActive) {
        if (e.key === "Enter" || e.key === "Escape") this.searchActive = false;
        else if (e.key === "Backspace") {
          this.searchQuery = this.searchQuery.slice(0, -1);
          this.recipeScrollOffset = 0;
        } else if (this.searchQuery.length < 20 && e.key.length === 1) {
          this.searchQuery += e.key;
          this.recipeScrollOffset = 0;
        }
        return;
      }

      if (e.code === "KeyE" || e.code === "KeyI" || e.code === "Tab") {
        if (e.code === "Tab") e.preventDefault();
        if (this.state === "PLAYING") {
          this.state = "INVENTORY";
          this.sound.play("click");
        } else if (this.state === "INVENTORY") {
          if (this.cursorItem) {
            this.player.inv.addItem(this.cursorItem.item, this.cursorItem.count);
            this.cursorItem = null;
          }
          this.selectedInvSlot = null;
          this.state = "PLAYING";
          this.sound.play("click");
        }
      }

      if (e.code === "Escape") {
        if (this.state === "INVENTORY" || this.state === "STAR_MAP") {
          if (this.cursorItem) {
            this.player.inv.addItem(this.cursorItem.item, this.cursorItem.count);
            this.cursorItem = null;
          }
          this.selectedInvSlot = null;
          this.state = "PLAYING";
          this.sound.play("click");
        } else if (this.state === "PLAYING") {
          this.state = "PAUSE";
          this.sound.play("click");
        } else if (this.state === "PAUSE") {
          this.state = "PLAYING";
          this.sound.play("click");
        }
      }

      if (e.code === "KeyH" && this.state === "PLAYING") {
        if (this.player.inv.countItem("Health Potion") > 0) {
          this.player.inv.removeItem("Health Potion", 1);
          this.player.hp = Math.min(this.player.max_hp, this.player.hp + 50);
          this.sound.play("potion");
          this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "+50 HP", COLOR_EXP));
        }
      }

      if (this.state === "PLAYING" && (e.code.startsWith("Digit") || e.code.startsWith("Numpad"))) {
        const d = parseInt(e.key, 10);
        if (!isNaN(d)) {
          this.player.inv.selectedHotbar = (d === 0) ? 9 : d - 1;
          this.sound.play("click");
        }
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

    const getTouchPos = (touch) => {
      const rect = this.canvas.getBoundingClientRect();
      const sx = SCREEN_WIDTH / rect.width;
      const sy = SCREEN_HEIGHT / rect.height;
      return { x: (touch.clientX - rect.left) * sx, y: (touch.clientY - rect.top) * sy };
    };

    const pointInPaddedRect = (px, py, btn) => {
      const p = btn.pad || 0;
      return px >= btn.x - p && px <= btn.x + btn.w + p &&
             py >= btn.y - p && py <= btn.y + btn.h + p;
    };

    const getTouchButtonId = (px, py) => {
      for (const [key, btn] of Object.entries(TOUCH_CONTROLS)) {
        if (pointInPaddedRect(px, py, btn)) return btn.id;
      }
      return null;
    };

    this.canvas.addEventListener("mousemove", (e) => {
      const pos = getCanvasPos(e);
      this.mouse.x = pos.x;
      this.mouse.y = pos.y;
      if (this.state === "PLAYING" && !this.isTouchDevice) {
        this.lockedTargetTile = {
          tx: Math.floor((pos.x + this.camX) / TILE_SIZE),
          ty: Math.floor((pos.y + this.camY) / TILE_SIZE)
        };
      }
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
      } else if (this.state === "INVENTORY") {
        const maxScroll = Math.max(0, this.getFilteredRecipes().length - 9);
        this.recipeScrollOffset = Math.max(0, Math.min(maxScroll, this.recipeScrollOffset + (e.deltaY > 0 ? 1 : -1)));
      } else if (this.state === "STAR_MAP") {
        this.planetScrollOffset = Math.max(0, Math.min(PLANET_ORDER.length - 4, this.planetScrollOffset + (e.deltaY > 0 ? 1 : -1)));
      }
    });

    this.canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.sound.init();
      this.isTouchDevice = true;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const pos = getTouchPos(t);

        if (this.state === "INVENTORY") {
          this.invTouchStartY = pos.y;
          this.invTouchStartX = pos.x;
          this.invTouchStartOffset = this.recipeScrollOffset;
          this.invHasDragged = false;
        }

        if (this.state !== "PLAYING") {
          this.mouse.x = pos.x;
          this.mouse.y = pos.y;
          this.activeTouches.set(t.identifier, { type: "menu", ...pos });
          if (this.state !== "INVENTORY") {
            this.handleLeftClick();
          }
          continue;
        }

        const btnId = getTouchButtonId(pos.x, pos.y);
        if (btnId) {
          this.activeTouches.set(t.identifier, { type: btnId, ...pos });

          if (btnId === "left")  this.keys["KeyA"] = true;
          if (btnId === "right") this.keys["KeyD"] = true;
          if (btnId === "jump")  this.keys["KeyW"] = true;
          if (btnId === "inv") {
            this.state = "INVENTORY";
            this.sound.play("click");
          }
          if (btnId === "heal") {
            if (this.player.inv.countItem("Health Potion") > 0) {
              this.player.inv.removeItem("Health Potion", 1);
              this.player.hp = Math.min(this.player.max_hp, this.player.hp + 50);
              this.sound.play("potion");
              this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "+50 HP", COLOR_EXP));
            }
          }
          if (btnId === "mine") {
            this.mouse.down = true;
            if (!this.lockedTargetTile) {
              const aheadX = this.player.x + (this.player.facingRight ? this.player.w + 14 : -14);
              this.lockedTargetTile = {
                tx: Math.floor(aheadX / TILE_SIZE),
                ty: Math.floor((this.player.y + this.player.h / 2) / TILE_SIZE)
              };
            }
          }
          if (btnId === "place") {
            this.handleRightClick();
          }
          continue;
        }

        const hotbarY = SCREEN_HEIGHT - 60;
        const hotbarStartX = SCREEN_WIDTH / 2 - 240;
        if (pos.y >= hotbarY - 8 && pos.y <= hotbarY + 52 && pos.x >= hotbarStartX && pos.x <= hotbarStartX + 480) {
          const clickedIdx = Math.floor((pos.x - hotbarStartX) / 48);
          if (clickedIdx >= 0 && clickedIdx < 10) {
            this.player.inv.selectedHotbar = clickedIdx;
            this.sound.play("click");
            this.activeTouches.set(t.identifier, { type: "hotbar", ...pos });
            continue;
          }
        }

        const targetWorldX = pos.x + this.camX;
        const targetWorldY = pos.y + this.camY;
        const tx = Math.floor(targetWorldX / TILE_SIZE);
        const ty = Math.floor(targetWorldY / TILE_SIZE);
        const sel = this.player.inv.getSelected();
        const dist = Math.hypot(targetWorldX - (this.player.x + this.player.w / 2), targetWorldY - (this.player.y + this.player.h / 2));

        let tappedEnemy = false;
        const enemyTouchPad = 28;
        for (const e of this.enemies) {
          if (targetWorldX >= e.x - enemyTouchPad && targetWorldX <= e.x + e.w + enemyTouchPad &&
              targetWorldY >= e.y - enemyTouchPad && targetWorldY <= e.y + e.h + enemyTouchPad) {
            this.performPlayerAttack(e.x + e.w / 2, e.y + e.h / 2);
            tappedEnemy = true;
            break;
          }
        }
        if (tappedEnemy) continue;

        this.lockedTargetTile = { tx, ty };

        const isBlock = (sel && typeof sel.item === "number" && BLOCK_DATA[sel.item]) || (sel && sel.item === "Obsidian");
        if (dist <= 190 && isBlock && this.world.getTile(tx, ty) === AIR) {
          this.handleRightClick();
          continue;
        }

        this.activeTouches.set(t.identifier, { type: "world", ...pos });
        this.mouse.down = true;
      }
    }, { passive: false });

    this.canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const pos = getTouchPos(t);
        const existing = this.activeTouches.get(t.identifier);
        if (!existing) continue;

        if (existing.type === "left" || existing.type === "right") {
          const newBtnId = getTouchButtonId(pos.x, pos.y);
          if (newBtnId === "left" && existing.type !== "left") {
            this.keys["KeyD"] = false;
            this.keys["KeyA"] = true;
            existing.type = "left";
          } else if (newBtnId === "right" && existing.type !== "right") {
            this.keys["KeyA"] = false;
            this.keys["KeyD"] = true;
            existing.type = "right";
          }
        }

        if (this.state === "INVENTORY" && this.invTouchStartY !== undefined) {
          const dy = pos.y - this.invTouchStartY;
          if (Math.abs(dy) > 8) {
            this.invHasDragged = true;
            const maxScroll = Math.max(0, this.getFilteredRecipes().length - 9);
            const step = Math.round(-dy / 28);
            this.recipeScrollOffset = Math.max(0, Math.min(maxScroll, this.invTouchStartOffset + step));
          }
        }

        if (existing.type === "world") {
          this.lockedTargetTile = {
            tx: Math.floor((pos.x + this.camX) / TILE_SIZE),
            ty: Math.floor((pos.y + this.camY) / TILE_SIZE)
          };
        }
      }
    }, { passive: false });

    const handleTouchEnd = (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const existing = this.activeTouches.get(t.identifier);
        const pos = getTouchPos(t);

        if (this.state === "INVENTORY" && !this.invHasDragged) {
          this.mouse.x = pos.x;
          this.mouse.y = pos.y;
          this.handleLeftClick();
        }

        if (this.state === "INVENTORY") {
          this.invTouchStartY = undefined;
          this.invHasDragged = false;
        }

        if (existing) {
          if (existing.type === "left")  this.keys["KeyA"] = false;
          if (existing.type === "right") this.keys["KeyD"] = false;
          if (existing.type === "jump")  this.keys["KeyW"] = false;
          if (existing.type === "mine" || existing.type === "world") {
            this.mouse.down = false;
          }
          this.activeTouches.delete(t.identifier);
        }
      }

      if (this.activeTouches.size === 0) {
        this.keys["KeyA"] = false;
        this.keys["KeyD"] = false;
        this.keys["KeyW"] = false;
        this.mouse.down = false;
      }
    };

    this.canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    this.canvas.addEventListener("touchcancel", handleTouchEnd, { passive: false });
  }

  handleLeftClick() {
    const mx = this.mouse.x;
    const my = this.mouse.y;

    if (this.state === "MENU") {
      if (mx >= SCREEN_WIDTH / 2 - 160 && mx <= SCREEN_WIDTH / 2 + 160 && my >= 310 && my <= 358) {
        this.loadSectorIndex();
        this.state = "WORLD_SELECT";
        this.sound.play("click");
      }
    } else if (this.state === "WORLD_SELECT") {
      for (let i = 0; i < Math.min(5, this.worldsList.length); i++) {
        const cardY = 110 + i * 72;
        if (mx >= SCREEN_WIDTH / 2 - 320 && mx <= SCREEN_WIDTH / 2 + 320 && my >= cardY && my <= cardY + 62) {
          this.selectedWorldIdx = i;
          this.loadSectorGame(this.worldsList[i].id);
          return;
        }
      }

      const bPlay = { x: SCREEN_WIDTH / 2 - 330, y: SCREEN_HEIGHT - 80, w: 155, h: 44 };
      const bCreate = { x: SCREEN_WIDTH / 2 - 165, y: SCREEN_HEIGHT - 80, w: 155, h: 44 };
      const bDelete = { x: SCREEN_WIDTH / 2 + 5, y: SCREEN_HEIGHT - 80, w: 150, h: 44 };
      const bBack = { x: SCREEN_WIDTH / 2 + 165, y: SCREEN_HEIGHT - 80, w: 155, h: 44 };

      if (mx >= bPlay.x && mx <= bPlay.x + bPlay.w && my >= bPlay.y && my <= bPlay.y + bPlay.h && this.worldsList.length > 0) {
        const targetSector = this.worldsList[this.selectedWorldIdx];
        this.loadSectorGame(targetSector.id);
      } else if (mx >= bCreate.x && mx <= bCreate.x + bCreate.w && my >= bCreate.y && my <= bCreate.y + bCreate.h) {
        this.state = "CREATE_WORLD";
        this.inputWorldName = `Sector ${this.worldsList.length + 1}`;
        this.sound.play("click");
      } else if (mx >= bDelete.x && mx <= bDelete.x + bDelete.w && my >= bDelete.y && my <= bDelete.y + bDelete.h) {
        this.deleteSelectedSector();
      } else if (mx >= bBack.x && mx <= bBack.x + bBack.w && my >= bBack.y && my <= bBack.y + bBack.h) {
        this.state = "MENU";
        this.sound.play("click");
      }
    } else if (this.state === "CREATE_WORLD") {
      const nameBox = { x: SCREEN_WIDTH / 2 - 200, y: 175, w: 400, h: 44 };
      this.nameInputActive = (mx >= nameBox.x && mx <= nameBox.x + nameBox.w && my >= nameBox.y && my <= nameBox.y + nameBox.h);

      const clist = Object.keys(CLASSES);
      for (let i = 0; i < clist.length; i++) {
        const cx = SCREEN_WIDTH / 2 - 260 + i * 135;
        if (mx >= cx && mx <= cx + 120 && my >= 275 && my <= 455) {
          this.selectedCreateClass = clist[i];
          this.sound.play("click");
        }
      }

      const btnConfirm = { x: SCREEN_WIDTH / 2 - 220, y: 515, w: 220, h: 54 };
      const btnCancel = { x: SCREEN_WIDTH / 2 + 10, y: 515, w: 210, h: 54 };

      if (mx >= btnConfirm.x && mx <= btnConfirm.x + btnConfirm.w && my >= btnConfirm.y && my <= btnConfirm.y + btnConfirm.h) {
        this.nameInputActive = false;
        this.newWorldGame(this.inputWorldName, this.selectedCreateClass);
        this.sound.play("craft");
      } else if (mx >= btnCancel.x && mx <= btnCancel.x + btnCancel.w && my >= btnCancel.y && my <= btnCancel.y + btnCancel.h) {
        this.state = "WORLD_SELECT";
        this.sound.play("click");
      }
    } else if (this.state === "PLAYING") {
      const hotbarY = SCREEN_HEIGHT - 60;
      const hotbarStartX = SCREEN_WIDTH / 2 - 240;
      if (my >= hotbarY && my <= hotbarY + 44 && mx >= hotbarStartX && mx <= hotbarStartX + 480) {
        const clickedIdx = Math.floor((mx - hotbarStartX) / 48);
        if (clickedIdx >= 0 && clickedIdx < 10) {
          this.player.inv.selectedHotbar = clickedIdx;
          this.sound.play("click");
          return;
        }
      }

      const worldMx = mx + this.camX;
      const worldMy = my + this.camY;
      const sel = this.player.inv.getSelected();

      if (sel && sel.item === "Dynamite") {
        if (this.player.attackCooldown <= 0) {
          this.player.attackCooldown = 22;
          this.player.inv.removeItem("Dynamite", 1);
          this.projectiles.push(new Projectile(this.player.x + 10, this.player.y + 10, worldMx, worldMy, 150, "dynamite"));
          this.sound.play("jump");
          return;
        }
      }

      const attacked = this.performPlayerAttack(worldMx, worldMy);
      if (attacked) return;

      this.lockedTargetTile = {
        tx: Math.floor(worldMx / TILE_SIZE),
        ty: Math.floor(worldMy / TILE_SIZE)
      };

    } else if (this.state === "INVENTORY") {
      this.handleInventoryClick(mx, my, 1);
    } else if (this.state === "STAR_MAP") {
      this.handleStarMapClick(mx, my);
    } else if (this.state === "PAUSE") {
      if (my >= 300 && my <= 342) this.state = "PLAYING";
      else if (my >= 354 && my <= 396) {
        this.saveCurrentSector();
        this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "SECTOR SAVED!", COLOR_GOLD));
      } else if (my >= 408 && my <= 450) {
        this.saveCurrentSector();
        this.loadSectorIndex();
        this.state = "WORLD_SELECT";
      }
    }
  }

  handleRightClick() {
    if (this.state === "PLAYING" && this.player) {
      const sel = this.player.inv.getSelected();
      const idata = sel ? (ITEM_DEFINITIONS[sel.item] || {}) : {};

      if (idata.type === "weapon" || idata.type === "ranged" || idata.type === "magic") {
        const aim = this.getAimTarget();
        const targetX = aim ? (aim.tx * TILE_SIZE + 16) : (this.player.x + (this.player.facingRight ? 60 : -60));
        const targetY = aim ? (aim.ty * TILE_SIZE + 16) : (this.player.y + this.player.h / 2);
        this.performPlayerAttack(targetX, targetY);
        return;
      }

      const target = this.getAimTarget();
      if (!target) return;

      const pDist = Math.hypot(
        (target.tx * TILE_SIZE + 16) - (this.player.x + this.player.w / 2),
        (target.ty * TILE_SIZE + 16) - (this.player.y + this.player.h / 2)
      );
      if (pDist > 195) return;

      if (sel && sel.item === "Prospecting Scanner") {
        this.triggerRadarScanner();
        return;
      }

      const clickedBlock = this.world.getTile(target.tx, target.ty);
      if (clickedBlock === CHEST) {
        this.lootChest(target.tx, target.ty);
        return;
      } else if (clickedBlock === LAUNCHPAD) {
        this.state = "STAR_MAP";
        this.sound.play("click");
        return;
      } else if ([WORKBENCH, FURNACE, ASSEMBLER, PARTICLE_COLLIDER].includes(clickedBlock)) {
        this.state = "INVENTORY";
        this.sound.play("click");
        return;
      }

      let placeTx = target.tx;
      let placeTy = target.ty;
      if (clickedBlock !== AIR) {
        const offsets = [
          { dx: 0, dy: -1 },
          { dx: (this.player.x > target.tx * TILE_SIZE ? 1 : -1), dy: 0 },
          { dx: 0, dy: 1 },
          { dx: (this.player.x > target.tx * TILE_SIZE ? -1 : 1), dy: 0 }
        ];
        let foundAir = false;
        for (const off of offsets) {
          if (this.world.getTile(target.tx + off.dx, target.ty + off.dy) === AIR) {
            placeTx = target.tx + off.dx;
            placeTy = target.ty + off.dy;
            foundAir = true;
            break;
          }
        }
        if (!foundAir) return;
      }

      const blockIdToPlace = (sel && typeof sel.item === "number" && BLOCK_DATA[sel.item])
        ? sel.item
        : (sel && sel.item === "Obsidian") ? OBSIDIAN : null;

      if (blockIdToPlace !== null && this.world.getTile(placeTx, placeTy) === AIR) {
        const bdata = BLOCK_DATA[blockIdToPlace] || {};
        const isNonSolid = bdata.light || [TORCH, LANTERN, NEON_LAMP].includes(blockIdToPlace);

        const placeRect = { x: placeTx * TILE_SIZE, y: placeTy * TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE };
        const pRect = { x: this.player.x, y: this.player.y, w: this.player.w, h: this.player.h };

        const overlapsPlayer = (placeRect.x < pRect.x + pRect.w && placeRect.x + placeRect.w > pRect.x &&
                                placeRect.y < pRect.y + pRect.h && placeRect.y + placeRect.h > pRect.y);

        if (isNonSolid || !overlapsPlayer) {
          this.world.setTile(placeTx, placeTy, blockIdToPlace);
          this.player.inv.removeItem(sel.item, 1);
          this.sound.play("place");
          this.lockedTargetTile = { tx: placeTx, ty: placeTy };
        }
      }
    } else if (this.state === "INVENTORY") {
      this.handleInventoryClick(this.mouse.x, this.mouse.y, 3);
    }
  }

  handleInventoryClick(mx, my, btn) {
    const rx = INV_UI_X + 24;

    if (mx >= INV_UI_X + 735 && mx <= INV_UI_X + 765 && my >= INV_UI_Y + 12 && my <= INV_UI_Y + 42) {
      this.selectedInvSlot = null;
      this.state = "PLAYING";
      this.sound.play("click");
      return;
    }

    const maxScroll = Math.max(0, this.getFilteredRecipes().length - 9);
    if (mx >= INV_UI_X + 680 && mx <= INV_UI_X + 710 && my >= INV_UI_Y + 225 && my <= INV_UI_Y + 250) {
      this.recipeScrollOffset = Math.max(0, this.recipeScrollOffset - 1);
      this.sound.play("click");
      return;
    }
    if (mx >= INV_UI_X + 715 && mx <= INV_UI_X + 745 && my >= INV_UI_Y + 225 && my <= INV_UI_Y + 250) {
      this.recipeScrollOffset = Math.min(maxScroll, this.recipeScrollOffset + 1);
      this.sound.play("click");
      return;
    }

    if (mx >= rx && mx <= rx + 140 && my >= INV_UI_Y + 225 && my <= INV_UI_Y + 251) {
      this.searchActive = true;
      this.sound.play("click");
      return;
    } else {
      this.searchActive = false;
    }

    const categories = ["ALL", "TOOLS", "WEAPONS", "ARMOR", "ROCKETS", "BLOCKS"];
    let catX = INV_UI_X + 172;
    for (const cat of categories) {
      if (mx >= catX && mx <= catX + 54 && my >= INV_UI_Y + 225 && my <= INV_UI_Y + 251) {
        this.craftCategory = cat;
        this.recipeScrollOffset = 0;
        this.sound.play("click");
        return;
      }
      catX += 58;
    }

    if (this.selectedInvSlot !== null && this.player.inv.slots[this.selectedInvSlot]) {
      const curItem = this.player.inv.slots[this.selectedInvSlot].item;
      const idata = ITEM_DEFINITIONS[curItem] || {};
      const cardX = INV_UI_X + 648;
      const cardY = INV_UI_Y + 75;
      const actBtn = { x: cardX + 6, y: cardY + 111, w: 96, h: 24 };

      if (mx >= actBtn.x && mx <= actBtn.x + actBtn.w && my >= actBtn.y && my <= actBtn.y + actBtn.h) {
        if (idata.type === "consumable" && idata.heal) {
          this.player.hp = Math.min(this.player.max_hp, this.player.hp + idata.heal);
          this.player.inv.removeItem(curItem, 1);
          this.sound.play("potion");
          this.floatTexts.push(new FloatingText(this.player.x, this.player.y, `+${idata.heal} HP`, COLOR_EXP));
          if (!this.player.inv.slots[this.selectedInvSlot]) this.selectedInvSlot = null;
          return;
        } else if (idata.type === "armor") {
          const prev = this.player.inv.armor[idata.slot];
          this.player.inv.armor[idata.slot] = curItem;
          if (prev) {
            this.player.inv.slots[this.selectedInvSlot] = { item: prev, count: 1 };
          } else {
            this.player.inv.slots[this.selectedInvSlot] = null;
            this.selectedInvSlot = null;
          }
          this.sound.play("craft");
          return;
        }
      }
    }

    const armorSlots = ["helmet", "chest", "boots"];
    for (const aslot of armorSlots) {
      const arec = getArmorRect(aslot);
      if (mx >= arec.x && mx <= arec.x + arec.w && my >= arec.y && my <= arec.y + arec.h) {
        const equipped = this.player.inv.armor[aslot];
        if (this.selectedInvSlot !== null) {
          const src = this.player.inv.slots[this.selectedInvSlot];
          const idata = src ? ITEM_DEFINITIONS[src.item] : null;
          if (idata && idata.type === "armor" && idata.slot === aslot) {
            this.player.inv.armor[aslot] = src.item;
            this.player.inv.slots[this.selectedInvSlot] = equipped ? { item: equipped, count: 1 } : null;
            this.sound.play("place");
            this.selectedInvSlot = null;
            return;
          }
        } else if (equipped) {
          if (this.player.inv.addItem(equipped, 1)) {
            this.player.inv.armor[aslot] = null;
            this.sound.play("click");
          }
          return;
        }
      }
    }

    for (let i = 0; i < 30; i++) {
      const srec = getSlotRect(i);
      if (mx >= srec.x && mx <= srec.x + srec.w && my >= srec.y && my <= srec.y + srec.h) {
        const clickedSlot = this.player.inv.slots[i];

        if (this.selectedInvSlot === null) {
          if (clickedSlot) {
            this.selectedInvSlot = i;
            this.sound.play("click");
          }
        } else if (this.selectedInvSlot === i) {
          this.selectedInvSlot = null;
          this.sound.play("click");
        } else {
          const source = this.player.inv.slots[this.selectedInvSlot];
          if (source) {
            if (!clickedSlot) {
              this.player.inv.slots[i] = source;
              this.player.inv.slots[this.selectedInvSlot] = null;
              this.selectedInvSlot = i;
              this.sound.play("place");
            } else if (clickedSlot.item === source.item) {
              clickedSlot.count += source.count;
              this.player.inv.slots[this.selectedInvSlot] = null;
              this.selectedInvSlot = i;
              this.sound.play("place");
            } else {
              const temp = this.player.inv.slots[i];
              this.player.inv.slots[i] = source;
              this.player.inv.slots[this.selectedInvSlot] = temp;
              this.selectedInvSlot = i;
              this.sound.play("place");
            }
          }
        }
        return;
      }
    }

    const displayedRecipes = this.getFilteredRecipes();
    const visibleSlice = displayedRecipes.slice(this.recipeScrollOffset, this.recipeScrollOffset + 9);
    for (let idx = 0; idx < visibleSlice.length; idx++) {
      const rec = visibleSlice[idx];
      const recY = INV_UI_Y + 260 + idx * 29;
      const craftBtn = { x: INV_UI_X + 675, y: recY + 2, w: 65, h: 22 };

      if (mx >= craftBtn.x && mx <= craftBtn.x + craftBtn.w && my >= craftBtn.y && my <= craftBtn.y + craftBtn.h) {
        const reqStation = rec.station || "hand";
        const stationOk = (reqStation === "hand" || this.isNearStation(reqStation === "workbench" ? WORKBENCH : reqStation === "furnace" ? FURNACE : reqStation === "assembler" ? ASSEMBLER : LAUNCHPAD));

        let canCraft = stationOk;
        for (const [rk, ramt] of Object.entries(rec.req)) {
          if (this.player.inv.countItem(rk) < ramt) canCraft = false;
        }

        if (canCraft) {
          for (const [rk, ramt] of Object.entries(rec.req)) {
            this.player.inv.removeItem(rk, ramt);
          }
          this.player.inv.addItem(rec.result, rec.count);
          if (rec.result === "Planetary Dynamo") this.gameWon = true;
          this.sound.play("craft");
        } else {
          this.sound.play("click");
        }
        return;
      }
    }
  }

  handleStarMapClick(mx, my) {
    const boxX = Math.floor((SCREEN_WIDTH - 820) / 2);
    const boxY = Math.floor((SCREEN_HEIGHT - 540) / 2);

    if (mx >= boxX + 770 && mx <= boxX + 802 && my >= boxY + 16 && my <= boxY + 48) {
      this.state = "PLAYING";
      this.sound.play("click");
      return;
    }

    const visiblePlanets = PLANET_ORDER.slice(this.planetScrollOffset, this.planetScrollOffset + 4);
    for (let idx = 0; idx < visiblePlanets.length; idx++) {
      const pKey = visiblePlanets[idx];
      const pdata = PLANET_DATA[pKey];
      const cardY = boxY + 80 + idx * 95;
      const lBtn = { x: boxX + 620, y: cardY + 24, w: 110, h: 36 };
      if (mx >= lBtn.x && mx <= lBtn.x + lBtn.w && my >= lBtn.y && my <= lBtn.y + lBtn.h) {
        this.travelToPlanet(pKey);
        return;
      }
    }
  }

  getFilteredRecipes() {
    return RECIPES.filter((r) => {
      const resName = BLOCK_DATA[r.result]?.name || String(r.result);
      if (this.searchQuery.trim() && !resName.toLowerCase().includes(this.searchQuery.toLowerCase())) return false;
      if (this.craftCategory !== "ALL") {
        const idata = ITEM_DEFINITIONS[r.result] || {};
        if (this.craftCategory === "TOOLS" && !["tool", "scanner", "explosive", "accessory"].includes(idata.type)) return false;
        if (this.craftCategory === "WEAPONS" && !["weapon", "ranged", "magic"].includes(idata.type)) return false;
        if (this.craftCategory === "ARMOR" && idata.type !== "armor") return false;
        if (this.craftCategory === "ROCKETS" && idata.type !== "rocket") return false;
        if (this.craftCategory === "BLOCKS" && typeof r.result !== "number") return false;
      }
      return true;
    });
  }

  getAimTarget() {
    if (this.lockedTargetTile && this.player) {
      const dist = Math.hypot(
        (this.lockedTargetTile.tx * TILE_SIZE + 16) - (this.player.x + this.player.w / 2),
        (this.lockedTargetTile.ty * TILE_SIZE + 16) - (this.player.y + this.player.h / 2)
      );
      if (dist <= 220) {
        return this.lockedTargetTile;
      } else {
        this.lockedTargetTile = null;
      }
    }

    if (!this.player) return null;
    const aheadX = this.player.x + (this.player.facingRight ? this.player.w + 14 : -14);
    return {
      tx: Math.floor(aheadX / TILE_SIZE),
      ty: Math.floor((this.player.y + this.player.h / 2) / TILE_SIZE)
    };
  }

  processContinuousDigging() {
    if (!this.mouse.down || this.state !== "PLAYING" || !this.player) return;

    const target = this.getAimTarget();
    if (!target) return;

    const tgx = target.tx;
    const tgy = target.ty;

    const pDist = Math.hypot((tgx * TILE_SIZE + 16) - (this.player.x + this.player.w / 2), (tgy * TILE_SIZE + 16) - (this.player.y + this.player.h / 2));
    if (pDist > 180) return;

    const t = this.world.getTile(tgx, tgy);
    if (t === AIR || t === LAVA) return;

    const evalMine = evaluateMiningInteraction(this.player, t);
    const key = `${tgx},${tgy}`;

    if (!evalMine.canDamage) {
      this.soundTimer++;
      if (this.soundTimer % 18 === 0) {
        this.sound.play("mine_metal");
        this.floatTexts.push(new FloatingText(tgx * TILE_SIZE, tgy * TILE_SIZE, evalMine.msg, COLOR_HP, 30));
      }
      return;
    }

    const hardness = BLOCK_DATA[t].hardness || 1.0;
    const dt = 1.0 / 60.0;
    const progressInc = dt * this.player.mine_mult * evalMine.effMult;

    let cur = this.world.damage_map.get(key) || 0.0;
    cur += progressInc;
    this.world.damage_map.set(key, cur);

    this.player.swingAnim = 6;
    this.soundTimer++;

    if (this.soundTimer % 12 === 0) {
      const mat = getBlockMaterial(t);
      this.sound.play(`mine_${mat}`);
      this.particles.push(new Particle(tgx * TILE_SIZE + 16, tgy * TILE_SIZE + 16, (Math.random() - 0.5) * 3, -1 - Math.random() * 2, BLOCK_DATA[t].color, 4, 18));
    }

    if (cur >= hardness) {
      const mat = getBlockMaterial(t);
      this.sound.play(`break_${mat}`);
      const drop = BLOCK_DATA[t].drop;
      if (evalMine.canDrop && drop) {
        this.player.inv.addItem(drop, 1);
        this.player.addXp(BLOCK_DATA[t].xp || 4, this.floatTexts, this.sound);
      }
      this.world.setTile(tgx, tgy, AIR);
      this.world.damage_map.delete(key);
    }
  }

  processEnvironmentalHazards() {
    const pTy = Math.floor(this.player.y / TILE_SIZE);
    const hasExosuit = this.player.inv.armor.chest === "Core Exosuit";
    const hasThermal = this.player.inv.armor.chest === "Thermal Suit";
    const hasOxygen = this.player.inv.countItem("Oxygen Tank") > 0;

    if (this.world.current_planet !== "Earth") {
      const haz = PLANET_DATA[this.world.current_planet]?.hazard || "";
      if (haz.includes("Vacuum") && !hasOxygen && !hasExosuit && Math.random() < 0.08) {
        this.player.hp -= 1.2;
        this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "OXYGEN DEPRIVATION!", COLOR_CYAN));
      }
    } else {
      if (pTy >= OUTER_CORE_BOTTOM && !hasExosuit && Math.random() < 0.15) {
        this.player.hp -= 4.0;
        this.sound.play("hurt");
        this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "PRESSURE CRUSH!", COLOR_PRESSURE));
      } else if (pTy >= UPPER_MANTLE_BOTTOM && !hasThermal && !hasExosuit && Math.random() < 0.15) {
        this.player.hp -= 1.5;
        this.sound.play("hurt");
        this.floatTexts.push(new FloatingText(this.player.x, this.player.y, "EXTREME HEAT!", COLOR_HEAT));
      }
    }

    if (this.player.inLava) {
      this.player.hp -= 1.5;
      if (Math.random() < 0.2) this.sound.play("hurt");
    }

    if (this.player.hp <= 0) {
      this.respawnPlayer();
    }
  }

  update() {
    if (this.state === "PLAYING" && this.player) {
      this.player.update(this.world, this.keys, this.sound);
      this.processContinuousDigging();
      this.world.updateLiquids(this.particles, this.sound);
      this.processEnvironmentalHazards();

      this.camX += (this.player.x - SCREEN_WIDTH / 2 - this.camX) * 0.1;
      this.camY += (this.player.y - SCREEN_HEIGHT / 2 - this.camY) * 0.1;
      this.camX = Math.max(0, Math.min(this.camX, this.world.width * TILE_SIZE - SCREEN_WIDTH));
      this.camY = Math.max(0, Math.min(this.camY, this.world.height * TILE_SIZE - SCREEN_HEIGHT));

      this.autoSaveTimer++;
      if (this.autoSaveTimer % 900 === 0) {
        this.saveCurrentSector();
      }

      for (let i = this.projectiles.length - 1; i >= 0; i--) {
        const p = this.projectiles[i];
        p.update();

        let hitEnemy = false;
        for (let j = this.enemies.length - 1; j >= 0; j--) {
          const e = this.enemies[j];
          if (p.x >= e.x && p.x <= e.x + e.w && p.y >= e.y && p.y <= e.y + e.h) {
            e.hp -= p.damage;
            e.vx = (p.vx > 0 ? 1 : -1) * 4.5;
            e.vy = -3.2;
            this.sound.play("hurt");
            this.floatTexts.push(new FloatingText(e.x + e.w / 2, e.y - 12, `-${p.damage}`, COLOR_HP, 45));

            for (let k = 0; k < 6; k++) {
              this.particles.push(new Particle(p.x, p.y, (Math.random() - 0.5) * 4, -1 - Math.random() * 2, e.color, 4, 18));
            }

            if (e.hp <= 0) {
              this.player.addXp(e.max_hp, this.floatTexts, this.sound);
              this.floatTexts.push(new FloatingText(e.x + e.w / 2, e.y - 28, "SLAIN!", COLOR_GOLD, 60));
              this.enemies.splice(j, 1);
            }

            hitEnemy = true;
            break;
          }
        }

        if (hitEnemy) {
          this.projectiles.splice(i, 1);
          continue;
        }

        if (p.type === "dynamite") {
          const gx = Math.floor(p.x / TILE_SIZE);
          const gy = Math.floor(p.y / TILE_SIZE);
          if (p.life <= 0 || this.world.getTile(gx, gy) !== AIR) {
            this.sound.play("boom");
            for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                const tx = gx + dx;
                const ty = gy + dy;
                if (![AIR, LAVA, INNER_CORE_METAL, CORE_CRYSTAL].includes(this.world.getTile(tx, ty))) {
                  const drop = BLOCK_DATA[this.world.getTile(tx, ty)]?.drop;
                  if (drop) this.player.inv.addItem(drop, 1);
                  this.world.setTile(tx, ty, AIR);
                }
              }
            }
            this.projectiles.splice(i, 1);
            continue;
          }
        }

        if (p.life <= 0) this.projectiles.splice(i, 1);
      }

      for (const e of this.enemies) {
        e.update(this.world, this.player);

        const distToPlayer = Math.hypot((e.x + e.w / 2) - (this.player.x + this.player.w / 2), (e.y + e.h / 2) - (this.player.y + this.player.h / 2));
        if (distToPlayer < 24) {
          if (!this.player.invulnTimer || this.player.invulnTimer <= 0) {
            const def = (this.player.inv.armor.helmet ? 4 : 0) + (this.player.inv.armor.chest ? 8 : 0);
            const taken = Math.max(3, e.damage - def);
            this.player.hp -= taken;
            this.player.invulnTimer = 35;
            this.player.vy = -3.5;
            this.player.vx = (this.player.x > e.x ? 1 : -1) * 4;
            this.sound.play("hurt");
            this.floatTexts.push(new FloatingText(this.player.x, this.player.y - 12, `-${taken}`, COLOR_HP, 45));

            if (this.player.hp <= 0) {
              this.respawnPlayer();
            }
          }
        }
      }

      if (this.player.invulnTimer > 0) this.player.invulnTimer--;

      if (this.enemies.length < 3 && Math.random() < 0.005) {
        const spawnSide = Math.random() < 0.5 ? -250 : 250;
        const etype = Math.floor(this.player.y / TILE_SIZE) > UPPER_MANTLE_BOTTOM ? "Mantle" : "Crust";
        this.enemies.push(new SlimeEnemy(this.player.x + spawnSide, this.player.y - 40, etype));
      }

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
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    this.ctx.fillStyle = COLOR_BG_DARK;
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    if (this.state === "MENU") {
      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 34px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("ASTROSTRATA: REIGNITION", SCREEN_WIDTH / 2, 220);

      this.ctx.fillStyle = COLOR_CYAN;
      this.ctx.font = "14px system-ui, -apple-system, sans-serif";
      this.ctx.fillText("Stratum Geology | Planetary Dynamos | Interplanetary Aerospace", SCREEN_WIDTH / 2, 255);

      const b1 = { x: SCREEN_WIDTH / 2 - 160, y: 310, w: 320, h: 48 };
      this.ctx.fillStyle = "#1e2436";
      this.ctx.fillRect(b1.x, b1.y, b1.w, b1.h);
      this.ctx.strokeStyle = COLOR_GOLD;
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(b1.x, b1.y, b1.w, b1.h);

      this.ctx.fillStyle = COLOR_WHITE;
      this.ctx.font = "bold 15px system-ui, -apple-system, sans-serif";
      this.ctx.fillText("ENTER EXPEDITION / SECTORS", SCREEN_WIDTH / 2, 340);

      this.ctx.fillStyle = "#606880";
      this.ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "left";
      this.ctx.fillText(VERSION_STRING, 24, SCREEN_HEIGHT - 24);
      return;
    }

    if (this.state === "WORLD_SELECT") {
      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 28px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("EXPEDITION SECTOR ARCHIVE", SCREEN_WIDTH / 2, 60);

      if (this.worldsList.length === 0) {
        this.ctx.fillStyle = "#8892b0";
        this.ctx.font = "16px system-ui, -apple-system, sans-serif";
        this.ctx.fillText("No sectors established. Click 'CREATE SECTOR' below.", SCREEN_WIDTH / 2, 240);
      } else {
        for (let i = 0; i < Math.min(5, this.worldsList.length); i++) {
          const w = this.worldsList[i];
          const cardY = 110 + i * 72;
          const isSelected = (i === this.selectedWorldIdx);

          this.ctx.fillStyle = isSelected ? "#28344e" : "#192030";
          this.ctx.fillRect(SCREEN_WIDTH / 2 - 320, cardY, 640, 62);
          this.ctx.strokeStyle = isSelected ? COLOR_GOLD : "#404c64";
          this.ctx.lineWidth = isSelected ? 2 : 1;
          this.ctx.strokeRect(SCREEN_WIDTH / 2 - 320, cardY, 640, 62);

          this.ctx.fillStyle = COLOR_WHITE;
          this.ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
          this.ctx.textAlign = "left";
          this.ctx.fillText(w.name, SCREEN_WIDTH / 2 - 300, cardY + 26);
          this.ctx.fillStyle = COLOR_CYAN;
          this.ctx.font = "12px system-ui, -apple-system, sans-serif";
          this.ctx.fillText(`Class: ${w.pClass} | Location: ${w.planet} | Date: ${w.savedAt}`, SCREEN_WIDTH / 2 - 300, cardY + 46);
        }
      }

      const hasWorlds = this.worldsList.length > 0;
      const buttons = [
        { label: "ENTER SECTOR", x: SCREEN_WIDTH / 2 - 330, w: 155, active: hasWorlds, color: COLOR_GOLD },
        { label: "CREATE SECTOR", x: SCREEN_WIDTH / 2 - 165, w: 155, active: true, color: COLOR_WHITE },
        { label: "DELETE", x: SCREEN_WIDTH / 2 + 5, w: 150, active: hasWorlds, color: COLOR_HP },
        { label: "MAIN MENU", x: SCREEN_WIDTH / 2 + 165, w: 155, active: true, color: COLOR_WHITE }
      ];

      for (const btn of buttons) {
        this.ctx.fillStyle = btn.active ? "#1e2436" : "#12141c";
        this.ctx.fillRect(btn.x, SCREEN_HEIGHT - 80, btn.w, 44);
        this.ctx.strokeStyle = btn.active ? btn.color : "#333948";
        this.ctx.strokeRect(btn.x, SCREEN_HEIGHT - 80, btn.w, 44);
        this.ctx.fillStyle = btn.active ? btn.color : "#606880";
        this.ctx.textAlign = "center";
        this.ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(btn.label, btn.x + btn.w / 2, SCREEN_HEIGHT - 53);
      }
      return;
    }

    if (this.state === "CREATE_WORLD") {
      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 28px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("INITIALIZE SECTOR PROFILE", SCREEN_WIDTH / 2, 60);

      this.ctx.fillStyle = "#141824";
      this.ctx.fillRect(SCREEN_WIDTH / 2 - 200, 175, 400, 44);
      this.ctx.strokeStyle = this.nameInputActive ? COLOR_GOLD : "#44506c";
      this.ctx.strokeRect(SCREEN_WIDTH / 2 - 200, 175, 400, 44);

      this.ctx.fillStyle = COLOR_WHITE;
      this.ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
      this.ctx.fillText(this.inputWorldName + (this.nameInputActive ? "_" : ""), SCREEN_WIDTH / 2, 203);

      const clist = Object.keys(CLASSES);
      for (let i = 0; i < clist.length; i++) {
        const cname = clist[i];
        const cardX = SCREEN_WIDTH / 2 - 260 + i * 135;
        this.ctx.fillStyle = (this.selectedCreateClass === cname) ? "#28344e" : "#141824";
        this.ctx.fillRect(cardX, 275, 120, 180);
        this.ctx.strokeStyle = (this.selectedCreateClass === cname) ? COLOR_GOLD : "#44506c";
        this.ctx.strokeRect(cardX, 275, 120, 180);

        this.ctx.fillStyle = CLASSES[cname].color;
        this.ctx.fillText(cname, cardX + 60, 305);
      }

      this.ctx.fillStyle = "#1e2436";
      this.ctx.fillRect(SCREEN_WIDTH / 2 - 220, 515, 220, 54);
      this.ctx.strokeStyle = COLOR_GOLD;
      this.ctx.strokeRect(SCREEN_WIDTH / 2 - 220, 515, 220, 54);
      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
      this.ctx.fillText("LAUNCH SECTOR", SCREEN_WIDTH / 2 - 110, 547);

      this.ctx.fillStyle = "#1e2436";
      this.ctx.fillRect(SCREEN_WIDTH / 2 + 10, 515, 210, 54);
      this.ctx.strokeStyle = "#404c64";
      this.ctx.strokeRect(SCREEN_WIDTH / 2 + 10, 515, 210, 54);
      this.ctx.fillStyle = COLOR_WHITE;
      this.ctx.fillText("CANCEL", SCREEN_WIDTH / 2 + 115, 547);
      return;
    }

    // Gameplay render
    const pTy = Math.floor(this.player.y / TILE_SIZE);
    this.ctx.fillStyle = (pTy < CRUST_SURFACE) ? (PLANET_DATA[this.world.current_planet]?.sky_color || "#87c3f5") : "#141620";
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    const minTx = Math.max(0, Math.floor(this.camX / TILE_SIZE));
    const maxTx = Math.min(this.world.width, Math.ceil((this.camX + SCREEN_WIDTH) / TILE_SIZE));
    const minTy = Math.max(0, Math.floor(this.camY / TILE_SIZE));
    const maxTy = Math.min(this.world.height, Math.ceil((this.camY + SCREEN_HEIGHT) / TILE_SIZE));

    for (let x = minTx; x < maxTx; x++) {
      for (let y = minTy; y < maxTy; y++) {
        const t = this.world.getTile(x, y);
        if (t !== AIR) {
          const dx = Math.floor(x * TILE_SIZE - this.camX);
          const dy = Math.floor(y * TILE_SIZE - this.camY);
          this.atlas.draw(this.ctx, "b_" + t, dx, dy, TILE_SIZE, TILE_SIZE);

          const dmg = this.world.damage_map.get(`${x},${y}`);
          if (dmg && BLOCK_DATA[t]) {
            const stage = Math.min(9, Math.floor((dmg / BLOCK_DATA[t].hardness) * 10));
            this.atlas.draw(this.ctx, "crack_" + stage, dx, dy, TILE_SIZE, TILE_SIZE);
          }
        }
      }
    }

    for (const e of this.enemies) e.draw(this.ctx, this.camX, this.camY);
    if (this.player) this.player.draw(this.ctx, this.camX, this.camY, this.atlas);
    for (const p of this.projectiles) p.draw(this.ctx, this.camX, this.camY);
    for (const pt of this.particles) pt.draw(this.ctx, this.camX, this.camY);
    for (const ft of this.floatTexts) ft.draw(this.ctx, this.camX, this.camY);

    if (this.player) this.lighting.render(this.ctx, this.player, this.world, this.camX, this.camY);

    const aim = this.getAimTarget();
    if (aim) {
      const pDist = Math.hypot((aim.tx * TILE_SIZE + 16) - (this.player.x + this.player.w / 2), (aim.ty * TILE_SIZE + 16) - (this.player.y + this.player.h / 2));
      const inReach = pDist <= 180;
      const rDx = Math.floor(aim.tx * TILE_SIZE - this.camX);
      const rDy = Math.floor(aim.ty * TILE_SIZE - this.camY);

      this.ctx.strokeStyle = inReach ? COLOR_GOLD : "rgba(235, 60, 60, 0.6)";
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(rDx, rDy, TILE_SIZE, TILE_SIZE);

      const targetTile = this.world.getTile(aim.tx, aim.ty);
      const dmg = this.world.damage_map.get(`${aim.tx},${aim.ty}`);

      if (dmg && BLOCK_DATA[targetTile]) {
        const pct = Math.min(1.0, dmg / BLOCK_DATA[targetTile].hardness);
        const barW = 32;
        const barH = 5;
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        this.ctx.fillRect(rDx, rDy - 8, barW, barH);
        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.fillRect(rDx, rDy - 8, Math.floor(barW * pct), barH);
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(rDx, rDy - 8, barW, barH);
      }

      if (targetTile !== AIR && BLOCK_DATA[targetTile]) {
        const bdata = BLOCK_DATA[targetTile];
        const hx = SCREEN_WIDTH - 290;
        const hy = 64;
        this.ctx.fillStyle = "rgba(18, 22, 32, 0.92)";
        this.ctx.fillRect(hx, hy, 270, 85);
        this.ctx.strokeStyle = COLOR_GOLD;
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(hx, hy, 270, 85);

        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.textAlign = "left";
        this.ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(bdata.name, hx + 12, hy + 20);

        const evalInfo = evaluateMiningInteraction(this.player, targetTile);
        this.ctx.fillStyle = evalInfo.canDrop ? COLOR_EXP : COLOR_HP;
        this.ctx.font = "11px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(`Mohs: ${bdata.mohs} | [${evalInfo.msg}]`, hx + 12, hy + 38);
        this.ctx.fillStyle = COLOR_CYAN;
        this.ctx.fillText(`Req: ${bdata.req_tool} (${TIER_NAMES[bdata.req_tier]})`, hx + 12, hy + 54);

        const curDmg = dmg || 0.0;
        const pct = Math.min(1.0, curDmg / bdata.hardness);
        this.ctx.fillStyle = "rgba(40, 50, 70, 0.8)";
        this.ctx.fillRect(hx + 12, hy + 64, 246, 12);
        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.fillRect(hx + 12, hy + 64, Math.floor(246 * pct), 12);
        this.ctx.fillStyle = COLOR_WHITE;
        this.ctx.font = "bold 9px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(`${Math.floor(pct * 100)}% (${curDmg.toFixed(1)}s / ${bdata.hardness}s)`, hx + 85, hy + 73);
      }
    }

    const layer = World.getLayerInfo(pTy, this.world.current_planet);
    this.ctx.fillStyle = "rgba(18, 22, 32, 0.85)";
    this.ctx.fillRect(SCREEN_WIDTH / 2 - 140, 14, 280, 64);
    this.ctx.strokeStyle = "#404c64";
    this.ctx.strokeRect(SCREEN_WIDTH / 2 - 140, 14, 280, 64);

    this.ctx.fillStyle = COLOR_GOLD;
    this.ctx.textAlign = "left";
    this.ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
    this.ctx.fillText(`${this.world.current_planet}: ${layer.name}`, SCREEN_WIDTH / 2 - 128, 32);
    this.ctx.fillStyle = COLOR_WHITE;
    this.ctx.font = "11px system-ui, -apple-system, sans-serif";
    this.ctx.fillText(`Depth: ${layer.depth} m | ${layer.pressure}`, SCREEN_WIDTH / 2 - 128, 50);
    this.ctx.fillStyle = COLOR_CYAN;
    this.ctx.fillText(`Thermal: ${layer.temp}`, SCREEN_WIDTH / 2 - 128, 66);

    this.ctx.fillStyle = COLOR_HP;
    this.ctx.fillRect(20, 20, Math.floor((this.player.hp / this.player.max_hp) * 180), 16);
    this.ctx.strokeStyle = COLOR_WHITE;
    this.ctx.strokeRect(20, 20, 180, 16);
    this.ctx.fillStyle = COLOR_WHITE;
    this.ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
    this.ctx.fillText(`HP ${Math.floor(this.player.hp)} / ${this.player.max_hp}`, 26, 32);

    this.ctx.fillStyle = COLOR_EXP;
    this.ctx.fillRect(20, 42, Math.floor((this.player.xp / this.player.xp_next) * 180), 12);
    this.ctx.strokeStyle = COLOR_WHITE;
    this.ctx.strokeRect(20, 42, 180, 12);
    this.ctx.fillStyle = COLOR_GOLD;
    this.ctx.fillText(`LVL ${this.player.level} (${this.player.pClass})`, 210, 32);

    if (this.state === "PLAYING") {
      for (let i = 0; i < 10; i++) {
        const bx = SCREEN_WIDTH / 2 - 240 + i * 48;
        const by = SCREEN_HEIGHT - 60;
        this.ctx.fillStyle = (i === this.player.inv.selectedHotbar) ? "rgba(255, 215, 0, 0.4)" : "rgba(20, 24, 36, 0.85)";
        this.ctx.fillRect(bx, by, 44, 44);
        this.ctx.strokeStyle = (i === this.player.inv.selectedHotbar) ? COLOR_GOLD : "#404c64";
        this.ctx.strokeRect(bx, by, 44, 44);

        const slot = this.player.inv.slots[i];
        if (slot) {
          this.drawItemIcon(this.ctx, slot.item, bx + 6, by + 6, 32, 32);
          if (slot.count > 1) {
            this.ctx.fillStyle = COLOR_GOLD;
            this.ctx.font = "bold 12px system-ui, -apple-system, sans-serif";
            this.ctx.fillText(`${slot.count}`, bx + 26, by + 38);
          }
        }
      }

      if (this.isTouchDevice) {
        this.ctx.save();
        for (const [key, btn] of Object.entries(TOUCH_CONTROLS)) {
          let isActive = false;
          for (const [tid, touch] of this.activeTouches) {
            if (touch.type === btn.id) { isActive = true; break; }
          }

          this.ctx.fillStyle = isActive ? "rgba(255, 215, 0, 0.42)" : "rgba(16, 22, 34, 0.72)";
          this.ctx.beginPath();
          if (this.ctx.roundRect) {
            this.ctx.roundRect(btn.x, btn.y, btn.w, btn.h, 10);
          } else {
            this.ctx.rect(btn.x, btn.y, btn.w, btn.h);
          }
          this.ctx.fill();

          this.ctx.strokeStyle = isActive ? COLOR_GOLD : "rgba(90, 220, 255, 0.55)";
          this.ctx.lineWidth = isActive ? 2.5 : 1.5;
          this.ctx.stroke();

          let displayLabel = btn.label;
          if (btn.id === "place") {
            const sel = this.player ? this.player.inv.getSelected() : null;
            const idata = sel ? ITEM_DEFINITIONS[sel.item] : null;
            if (idata && (idata.type === "weapon" || idata.type === "ranged" || idata.type === "magic")) {
              displayLabel = "ATK";
            }
          }

          this.ctx.fillStyle = isActive ? COLOR_GOLD : COLOR_WHITE;
          this.ctx.font = (displayLabel.length > 3) ? "bold 13px system-ui, -apple-system, sans-serif" : "bold 17px system-ui, -apple-system, sans-serif";
          this.ctx.textAlign = "center";
          this.ctx.textBaseline = "middle";
          this.ctx.fillText(displayLabel, btn.x + btn.w / 2, btn.y + btn.h / 2);
        }
        this.ctx.restore();
      }
    }

    if (this.state === "INVENTORY") {
      this.ctx.fillStyle = "rgba(10, 12, 18, 0.96)";
      this.ctx.fillRect(INV_UI_X, INV_UI_Y, 780, 540);
      this.ctx.strokeStyle = COLOR_GOLD;
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(INV_UI_X, INV_UI_Y, 780, 540);

      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 20px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "left";
      this.ctx.fillText("WORKSHOP & FABRICATION MATRIX", INV_UI_X + 24, INV_UI_Y + 36);

      this.ctx.fillStyle = "#e63c3c";
      this.ctx.fillRect(INV_UI_X + 735, INV_UI_Y + 12, 30, 30);
      this.ctx.strokeStyle = COLOR_WHITE;
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(INV_UI_X + 735, INV_UI_Y + 12, 30, 30);
      this.ctx.fillStyle = COLOR_WHITE;
      this.ctx.font = "bold 16px system-ui, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("✕", INV_UI_X + 750, INV_UI_Y + 33);
      this.ctx.textAlign = "left";

      const armorSlots = ["helmet", "chest", "boots"];
      for (const aslot of armorSlots) {
        const arec = getArmorRect(aslot);
        this.ctx.fillStyle = "#161c28";
        this.ctx.fillRect(arec.x, arec.y, arec.w, arec.h);
        this.ctx.strokeStyle = "#404c64";
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(arec.x, arec.y, arec.w, arec.h);

        const aItem = this.player.inv.armor[aslot];
        if (aItem) {
          this.drawItemIcon(this.ctx, aItem, arec.x + 7, arec.y + 7, 32, 32);
        } else {
          this.ctx.fillStyle = "#4a5266";
          this.ctx.font = "bold 9px system-ui, -apple-system, sans-serif";
          this.ctx.textAlign = "center";
          this.ctx.fillText(aslot.toUpperCase(), arec.x + arec.w / 2, arec.y + arec.h / 2 + 3);
          this.ctx.textAlign = "left";
        }
      }

      for (let i = 0; i < 30; i++) {
        const srec = getSlotRect(i);
        const isSelected = (this.selectedInvSlot === i);

        this.ctx.fillStyle = isSelected ? "#2a3b5c" : "#1c2230";
        this.ctx.fillRect(srec.x, srec.y, srec.w, srec.h);
        this.ctx.strokeStyle = isSelected ? COLOR_GOLD : "#404c64";
        this.ctx.lineWidth = isSelected ? 2.5 : 1;
        this.ctx.strokeRect(srec.x, srec.y, srec.w, srec.h);

        const slot = this.player.inv.slots[i];
        if (slot) {
          this.drawItemIcon(this.ctx, slot.item, srec.x + 6, srec.y + 6, 32, 32);
          if (slot.count > 1) {
            this.ctx.fillStyle = COLOR_GOLD;
            this.ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
            this.ctx.fillText(`${slot.count}`, srec.x + 24, srec.y + 38);
          }
        }
      }

      const cardX = INV_UI_X + 648;
      const cardY = INV_UI_Y + 75;
      const cardW = 108;
      const cardH = 142;

      this.ctx.fillStyle = "#141824";
      this.ctx.fillRect(cardX, cardY, cardW, cardH);
      this.ctx.strokeStyle = (this.selectedInvSlot !== null) ? COLOR_GOLD : "#2e3646";
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeRect(cardX, cardY, cardW, cardH);

      if (this.selectedInvSlot !== null && this.player.inv.slots[this.selectedInvSlot]) {
        const activeItem = this.player.inv.slots[this.selectedInvSlot].item;
        const idata = ITEM_DEFINITIONS[activeItem] || {};
        const bdata = BLOCK_DATA[activeItem] || {};

        this.drawItemIcon(this.ctx, activeItem, cardX + cardW / 2 - 16, cardY + 8, 32, 32);

        const displayName = bdata.name || activeItem;
        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText(displayName.length > 13 ? displayName.substring(0, 12) + "…" : displayName, cardX + cardW / 2, cardY + 52);

        const typeStr = idata.type ? idata.type.toUpperCase() : "BLOCK";
        this.ctx.fillStyle = COLOR_CYAN;
        this.ctx.font = "bold 9px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(typeStr, cardX + cardW / 2, cardY + 66);

        this.ctx.fillStyle = COLOR_WHITE;
        this.ctx.font = "10px system-ui, -apple-system, sans-serif";
        let statStr = "";
        if (idata.dmg) statStr = `DMG: ${idata.dmg}`;
        else if (idata.defense) statStr = `DEF: +${idata.defense}`;
        else if (idata.mult) statStr = `${idata.mult}x SPD`;
        else if (idata.heal) statStr = `+${idata.heal} HP`;
        else if (bdata.mohs) statStr = `Mohs: ${bdata.mohs}`;
        this.ctx.fillText(statStr, cardX + cardW / 2, cardY + 80);

        if (idata.type === "consumable" || idata.type === "armor") {
          const btnLabel = (idata.type === "consumable") ? "USE" : "EQUIP";
          this.ctx.fillStyle = "#236437";
          this.ctx.fillRect(cardX + 6, cardY + 111, cardW - 12, 24);
          this.ctx.strokeStyle = COLOR_EXP;
          this.ctx.lineWidth = 1;
          this.ctx.strokeRect(cardX + 6, cardY + 111, cardW - 12, 24);
          this.ctx.fillStyle = COLOR_WHITE;
          this.ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
          this.ctx.fillText(btnLabel, cardX + cardW / 2, cardY + 127);
        } else {
          this.ctx.fillStyle = "#66728a";
          this.ctx.font = "9px system-ui, -apple-system, sans-serif";
          this.ctx.fillText("Tap slot to move", cardX + cardW / 2, cardY + 126);
        }
        this.ctx.textAlign = "left";
      } else {
        this.ctx.fillStyle = "#4a5266";
        this.ctx.font = "11px system-ui, -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Tap item", cardX + cardW / 2, cardY + 65);
        this.ctx.fillText("to inspect", cardX + cardW / 2, cardY + 80);
        this.ctx.textAlign = "left";
      }

      this.ctx.fillStyle = "#141824";
      this.ctx.fillRect(INV_UI_X + 24, INV_UI_Y + 225, 140, 26);
      this.ctx.strokeStyle = this.searchActive ? COLOR_CYAN : "#404c64";
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(INV_UI_X + 24, INV_UI_Y + 225, 140, 26);
      this.ctx.fillStyle = this.searchQuery ? COLOR_WHITE : "#7c8599";
      this.ctx.font = "12px system-ui, -apple-system, sans-serif";
      this.ctx.fillText(this.searchQuery || "Search...", INV_UI_X + 32, INV_UI_Y + 242);

      const categories = ["ALL", "TOOLS", "WEAPONS", "ARMOR", "ROCKETS", "BLOCKS"];
      let catX = INV_UI_X + 172;
      for (const cat of categories) {
        const isSel = this.craftCategory === cat;
        this.ctx.fillStyle = isSel ? "#2b3b55" : "#161c28";
        this.ctx.fillRect(catX, INV_UI_Y + 225, 54, 26);
        this.ctx.strokeStyle = isSel ? COLOR_GOLD : "#404c64";
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(catX, INV_UI_Y + 225, 54, 26);
        this.ctx.fillStyle = isSel ? COLOR_GOLD : COLOR_WHITE;
        this.ctx.font = "bold 10px system-ui, -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText(cat, catX + 27, INV_UI_Y + 242);
        catX += 58;
      }
      this.ctx.textAlign = "left";

      const displayedRecipes = this.getFilteredRecipes();
      const maxScroll = Math.max(0, displayedRecipes.length - 9);

      this.ctx.fillStyle = COLOR_CYAN;
      this.ctx.font = "11px system-ui, -apple-system, sans-serif";
      const startIdx = displayedRecipes.length > 0 ? this.recipeScrollOffset + 1 : 0;
      const endIdx = Math.min(displayedRecipes.length, this.recipeScrollOffset + 9);
      this.ctx.fillText(`${startIdx}-${endIdx} / ${displayedRecipes.length}`, INV_UI_X + 530, INV_UI_Y + 242);

      this.ctx.fillStyle = (this.recipeScrollOffset > 0) ? "#24324a" : "#151922";
      this.ctx.fillRect(INV_UI_X + 680, INV_UI_Y + 225, 28, 26);
      this.ctx.strokeStyle = (this.recipeScrollOffset > 0) ? COLOR_GOLD : "#3a4254";
      this.ctx.strokeRect(INV_UI_X + 680, INV_UI_Y + 225, 28, 26);
      this.ctx.fillStyle = (this.recipeScrollOffset > 0) ? COLOR_WHITE : "#555d70";
      this.ctx.font = "bold 12px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("▲", INV_UI_X + 694, INV_UI_Y + 242);

      this.ctx.fillStyle = (this.recipeScrollOffset < maxScroll) ? "#24324a" : "#151922";
      this.ctx.fillRect(INV_UI_X + 714, INV_UI_Y + 225, 28, 26);
      this.ctx.strokeStyle = (this.recipeScrollOffset < maxScroll) ? COLOR_GOLD : "#3a4254";
      this.ctx.strokeRect(INV_UI_X + 714, INV_UI_Y + 225, 28, 26);
      this.ctx.fillStyle = (this.recipeScrollOffset < maxScroll) ? COLOR_WHITE : "#555d70";
      this.ctx.fillText("▼", INV_UI_X + 728, INV_UI_Y + 242);
      this.ctx.textAlign = "left";

      const visibleSlice = displayedRecipes.slice(this.recipeScrollOffset, this.recipeScrollOffset + 9);
      for (let idx = 0; idx < visibleSlice.length; idx++) {
        const rec = visibleSlice[idx];
        const recY = INV_UI_Y + 260 + idx * 29;

        const reqStation = rec.station || "hand";
        const stationOk = (reqStation === "hand" || this.isNearStation(reqStation === "workbench" ? WORKBENCH : reqStation === "furnace" ? FURNACE : reqStation === "assembler" ? ASSEMBLER : LAUNCHPAD));

        let canCraft = stationOk;
        const reqTexts = [];
        for (const [rk, ramt] of Object.entries(rec.req)) {
          const have = this.player.inv.countItem(rk);
          if (have < ramt) canCraft = false;
          const rName = BLOCK_DATA[rk]?.name || rk;
          reqTexts.push(`${rName}:${have}/${ramt}`);
        }

        this.ctx.fillStyle = "#161c28";
        this.ctx.fillRect(INV_UI_X + 24, recY, 720, 26);
        this.ctx.strokeStyle = canCraft ? "rgba(90, 220, 255, 0.4)" : "#2e3646";
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(INV_UI_X + 24, recY, 720, 26);

        const rName = BLOCK_DATA[rec.result]?.name || String(rec.result);
        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.font = "bold 12px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(`[${reqStation.toUpperCase()}] ${rName} x${rec.count}`, INV_UI_X + 32, recY + 17);

        this.ctx.fillStyle = canCraft ? COLOR_EXP : "#8890a0";
        this.ctx.font = "11px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(reqTexts.join("  "), INV_UI_X + 270, recY + 17);

        const craftBtn = { x: INV_UI_X + 675, y: recY + 2, w: 65, h: 22 };
        this.ctx.fillStyle = canCraft ? "#236437" : "#282d38";
        this.ctx.fillRect(craftBtn.x, craftBtn.y, craftBtn.w, craftBtn.h);
        this.ctx.strokeStyle = canCraft ? COLOR_EXP : "#424856";
        this.ctx.strokeRect(craftBtn.x, craftBtn.y, craftBtn.w, craftBtn.h);
        this.ctx.fillStyle = canCraft ? COLOR_WHITE : "#666e80";
        this.ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText("CRAFT", craftBtn.x + 32, craftBtn.y + 15);
        this.ctx.textAlign = "left";
      }
    }

    if (this.state === "STAR_MAP") {
      this.ctx.fillStyle = "rgba(8, 12, 22, 0.95)";
      this.ctx.fillRect(INV_UI_X, INV_UI_Y, 820, 540);
      this.ctx.strokeStyle = COLOR_CYAN;
      this.ctx.strokeRect(INV_UI_X, INV_UI_Y, 820, 540);

      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 20px system-ui, -apple-system, sans-serif";
      this.ctx.fillText("AEROSPACE STAR MAP (TIER 1 - 15)", INV_UI_X + 24, INV_UI_Y + 36);

      const visiblePlanets = PLANET_ORDER.slice(this.planetScrollOffset, this.planetScrollOffset + 4);
      for (let idx = 0; idx < visiblePlanets.length; idx++) {
        const pKey = visiblePlanets[idx];
        const pdata = PLANET_DATA[pKey];
        const cardY = INV_UI_Y + 70 + idx * 105;

        this.ctx.fillStyle = (pKey === this.world.current_planet) ? "#20344a" : "#141c2a";
        this.ctx.fillRect(INV_UI_X + 24, cardY, 760, 95);
        this.ctx.strokeStyle = COLOR_CYAN;
        this.ctx.strokeRect(INV_UI_X + 24, cardY, 760, 95);

        this.ctx.fillStyle = COLOR_WHITE;
        this.ctx.font = "bold 15px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(`${pdata.name} (Tier ${pdata.tier})`, INV_UI_X + 40, cardY + 28);
        this.ctx.fillStyle = COLOR_CYAN;
        this.ctx.font = "12px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(`Gravity: ${pdata.gravity}g | Hazard: ${pdata.hazard}`, INV_UI_X + 40, cardY + 50);

        this.ctx.fillStyle = "#1e2e44";
        this.ctx.fillRect(INV_UI_X + 650, cardY + 30, 110, 36);
        this.ctx.strokeStyle = COLOR_GOLD;
        this.ctx.strokeRect(INV_UI_X + 650, cardY + 30, 110, 36);
        this.ctx.fillStyle = COLOR_GOLD;
        this.ctx.fillText("LAUNCH", INV_UI_X + 680, cardY + 52);
      }
    }

    if (this.state === "PAUSE") {
      this.ctx.fillStyle = "rgba(5, 5, 10, 0.85)";
      this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      this.ctx.fillStyle = COLOR_GOLD;
      this.ctx.font = "bold 28px system-ui, -apple-system, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText("EXPEDITION PAUSED", SCREEN_WIDTH / 2, 230);

      const pauseOpts = [
        { label: "RESUME SECTOR", y: 300 },
        { label: "SAVE SECTOR PROGRESS", y: 354 },
        { label: "QUIT TO SECTOR ARCHIVE", y: 408 }
      ];

      for (const opt of pauseOpts) {
        this.ctx.fillStyle = "#1e2436";
        this.ctx.fillRect(SCREEN_WIDTH / 2 - 160, opt.y, 320, 42);
        this.ctx.strokeStyle = COLOR_GOLD;
        this.ctx.strokeRect(SCREEN_WIDTH / 2 - 160, opt.y, 320, 42);
        this.ctx.fillStyle = COLOR_WHITE;
        this.ctx.font = "bold 14px system-ui, -apple-system, sans-serif";
        this.ctx.fillText(opt.label, SCREEN_WIDTH / 2, opt.y + 26);
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

// ==========================================
// BULLETPROOF ENGINE BOOTSTRAPPER
// ==========================================
function startAstroStrataApp() {
  const overlay = document.getElementById("loading-overlay");
  const startBtn = document.getElementById("start-btn");

  let gameInstance = null;
  try {
    gameInstance = new AstroStrataEngine();
  } catch (err) {
    console.error("Game engine startup error:", err);
    alert("Engine Startup Error: " + err.message + "\nCheck browser console for stack trace.");
    return;
  }

  const dismissAndPlay = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (overlay) {
      overlay.classList.add("fade-out");
      overlay.style.pointerEvents = "none";
      overlay.style.display = "none";
    }

    try {
      if (gameInstance && gameInstance.sound) {
        gameInstance.sound.init();
      }
    } catch (audioErr) {
      console.warn("Audio Context init suppressed:", audioErr);
    }

    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
    } catch (fsErr) {}

    if (gameInstance) {
      gameInstance.draw();
    }
  };

  if (startBtn) {
    startBtn.onclick = dismissAndPlay;
    startBtn.ontouchend = dismissAndPlay;
  }

  if (overlay) {
    overlay.onclick = (e) => {
      dismissAndPlay(e);
    };
    overlay.ontouchend = (e) => {
      dismissAndPlay(e);
    };
  }

  gameInstance.run();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startAstroStrataApp);
} else {
  startAstroStrataApp();
}