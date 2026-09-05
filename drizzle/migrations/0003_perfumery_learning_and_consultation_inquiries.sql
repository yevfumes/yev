DROP TABLE `class_interest`;--> statement-breakpoint
DROP TABLE `project_enquiries`;--> statement-breakpoint
CREATE TABLE `perfumery_learning_inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`country` text,
	`experience_level` text,
	`what_to_learn` text,
	`struggling_with` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `consultation_inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`country` text,
	`experience_level` text,
	`has_formula` text,
	`material_count` text,
	`improve_goals` text,
	`formula_or_question` text NOT NULL,
	`fragrance_direction` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer
);
