CREATE TABLE `class_interest` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`location` text,
	`experience_level` text,
	`learning_goals` text,
	`preferred_format` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `project_enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`company` text,
	`website` text,
	`country` text,
	`brand_status` text,
	`project_type` text,
	`number_of_fragrances` text,
	`fragrance_direction` text,
	`creative_brief` text NOT NULL,
	`reference_fragrances` text,
	`target_customer` text,
	`launch_date` text,
	`budget` text,
	`production_quantity` text,
	`support_needed` text,
	`additional_info` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer
);
