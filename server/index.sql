CREATE TABLE form (
	user_id serial PRIMARY KEY,
	name TEXT NOT NULL,
	surname TEXT NOT NULL,
	food TEXT [] NOT NULL,
	time NUMERIC NOT NULL,
	attending BOOLEAN NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);