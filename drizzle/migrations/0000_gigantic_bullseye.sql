CREATE TABLE `accords` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`olfactory_family` text,
	`odor_descriptors` text,
	`ingredients_json` text DEFAULT '[]' NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `batches` (
	`id` text PRIMARY KEY NOT NULL,
	`batch_number` text NOT NULL,
	`formula_id` text NOT NULL,
	`version_id` text,
	`quantity_grams` real NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`produced_date` integer,
	`notes` text,
	`created_at` integer,
	FOREIGN KEY (`formula_id`) REFERENCES `formulas`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`version_id`) REFERENCES `formula_versions`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `formula_evaluations` (
	`id` text PRIMARY KEY NOT NULL,
	`formula_id` text NOT NULL,
	`version_id` text,
	`evaluator_name` text,
	`rating` integer,
	`attributes` text,
	`notes` text NOT NULL,
	`eval_date` integer,
	FOREIGN KEY (`formula_id`) REFERENCES `formulas`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`version_id`) REFERENCES `formula_versions`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `formula_ingredients` (
	`id` text PRIMARY KEY NOT NULL,
	`version_id` text NOT NULL,
	`formula_id` text NOT NULL,
	`material_id` text,
	`material_name_raw` text,
	`percentage` real NOT NULL,
	`dilution_pct` real DEFAULT 100 NOT NULL,
	`grams` real,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`note_position` text,
	`cost_per_kg_override` real,
	`notes` text,
	FOREIGN KEY (`version_id`) REFERENCES `formula_versions`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `formula_versions` (
	`id` text PRIMARY KEY NOT NULL,
	`formula_id` text NOT NULL,
	`version_number` text NOT NULL,
	`version_label` text,
	`batch_size_grams` real DEFAULT 100 NOT NULL,
	`total_cost_per_kg` real,
	`is_compliant` integer,
	`notes` text,
	`created_at` integer,
	FOREIGN KEY (`formula_id`) REFERENCES `formulas`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `formulas` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`formula_type` text DEFAULT 'concentrate' NOT NULL,
	`description` text,
	`ifra_category` integer DEFAULT 4,
	`target_concentration_pct` real,
	`olfactory_family` text,
	`odor_descriptors` text,
	`season` text,
	`current_version_id` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`is_secret` integer DEFAULT false,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `ifra_limits` (
	`id` text PRIMARY KEY NOT NULL,
	`material_id` text NOT NULL,
	`category` integer NOT NULL,
	`limit_pct` real NOT NULL,
	`restriction_type` text DEFAULT 'restricted',
	`notes` text,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `inventory_lots` (
	`id` text PRIMARY KEY NOT NULL,
	`material_id` text NOT NULL,
	`lot_number` text,
	`supplier_id` text,
	`quantity_received_grams` real NOT NULL,
	`quantity_remaining_grams` real NOT NULL,
	`cost_per_kg` real,
	`received_date` integer,
	`expiry_date` integer,
	`storage_location` text,
	`notes` text,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `inventory_transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`material_id` text NOT NULL,
	`lot_id` text,
	`transaction_type` text NOT NULL,
	`quantity_grams` real NOT NULL,
	`reference_type` text,
	`reference_id` text,
	`notes` text,
	`created_at` integer,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`lot_id`) REFERENCES `inventory_lots`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `material_allergens` (
	`id` text PRIMARY KEY NOT NULL,
	`material_id` text NOT NULL,
	`allergen_name` text NOT NULL,
	`concentration_pct` real NOT NULL,
	`is_eu_regulated` integer DEFAULT true,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `materials` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`inci_name` text,
	`cas_number` text,
	`fema_number` text,
	`material_type` text DEFAULT 'synthetic' NOT NULL,
	`physical_form` text DEFAULT 'liquid',
	`note_position` text,
	`odor_descriptors` text,
	`odor_intensity` integer,
	`odor_longevity` integer,
	`olfactory_family` text,
	`default_dilution` real DEFAULT 100 NOT NULL,
	`flash_point` real,
	`cost_per_kg` real,
	`supplier_id` text,
	`stock_grams` real DEFAULT 0 NOT NULL,
	`reorder_threshold_grams` real,
	`storage_location` text,
	`notes` text,
	`is_restricted` integer DEFAULT false,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `supplier_materials` (
	`id` text PRIMARY KEY NOT NULL,
	`supplier_id` text NOT NULL,
	`material_id` text NOT NULL,
	`supplier_code` text,
	`cost_per_kg` real,
	`currency` text DEFAULT 'USD',
	`moq_kg` real,
	`lead_time_days` integer,
	`is_preferred` integer DEFAULT false,
	`last_updated` integer,
	FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`material_id`) REFERENCES `materials`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`country` text,
	`website` text,
	`email` text,
	`phone` text,
	`notes` text,
	`is_preferred` integer DEFAULT false,
	`created_at` integer
);
--> statement-breakpoint
CREATE INDEX `fi_version_idx` ON `formula_ingredients` (`version_id`);--> statement-breakpoint
CREATE INDEX `fi_material_idx` ON `formula_ingredients` (`material_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `ifra_material_category_idx` ON `ifra_limits` (`material_id`,`category`);--> statement-breakpoint
CREATE INDEX `materials_name_idx` ON `materials` (`name`);--> statement-breakpoint
CREATE INDEX `materials_cas_idx` ON `materials` (`cas_number`);--> statement-breakpoint
CREATE INDEX `materials_type_idx` ON `materials` (`material_type`);--> statement-breakpoint
CREATE UNIQUE INDEX `supplier_material_unique_idx` ON `supplier_materials` (`supplier_id`,`material_id`);