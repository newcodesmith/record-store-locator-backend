exports.up = function(knex) {
  return knex.raw(`
    ALTER TABLE comment ALTER COLUMN "dateCreated" DROP DEFAULT;
    ALTER TABLE comment ALTER COLUMN "dateCreated" TYPE timestamp USING "dateCreated"::timestamp;
    ALTER TABLE comment ALTER COLUMN "dateCreated" SET DEFAULT now();
    ALTER TABLE comment ALTER COLUMN "dateCreated" SET NOT NULL
  `);
};

exports.down = function(knex) {
  return knex.raw(`
    ALTER TABLE comment
    ALTER COLUMN "dateCreated" TYPE text USING "dateCreated"::text,
    ALTER COLUMN "dateCreated" DROP DEFAULT,
    ALTER COLUMN "dateCreated" SET NOT NULL
  `);
};
