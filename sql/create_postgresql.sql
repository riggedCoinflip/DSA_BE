/* ---------------------------------------------------------------------- */
/* Script generated with: DeZign for Databases 12.4.2                     */
/* Target DBMS:           PostgreSQL 12                                   */
/* Project file:          Project1.dez                                    */
/* Project name:                                                          */
/* Author:                                                                */
/* Script type:           Database creation script                        */
/* Created on:            2021-11-14 15:27                                */
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
/* Add tables                                                             */
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/* Add table "Charakter"                                                  */
/* ---------------------------------------------------------------------- */



CREATE TABLE Charakter (
    charakter_id SERIAL  NOT NULL,
    name CHARACTER(60),
    gewicht SMALLINT,
    PRIMARY KEY (charakter_id)
);



/* ---------------------------------------------------------------------- */
/* Add table "Eigenschaften"                                              */
/* ---------------------------------------------------------------------- */



CREATE TABLE Eigenschaften (
    eigenschaften_id SERIAL  NOT NULL,
    charakter_id SERIAL  NOT NULL,
    mu SMALLINT  NOT NULL,
    kl SMALLINT  NOT NULL,
    in_ SMALLINT  NOT NULL,
    ch SMALLINT  NOT NULL,
    ff SMALLINT  NOT NULL,
    ge SMALLINT  NOT NULL,
    ko SMALLINT  NOT NULL,
    kk SMALLINT  NOT NULL,
    CONSTRAINT PK_Eigenschaften PRIMARY KEY (eigenschaften_id)
);



COMMENT ON COLUMN Eigenschaften.mu IS 'Mut';

COMMENT ON COLUMN Eigenschaften.kl IS 'Klugheit';

COMMENT ON COLUMN Eigenschaften.in_ IS 'Intuition';

COMMENT ON COLUMN Eigenschaften.ch IS 'Charisma';

COMMENT ON COLUMN Eigenschaften.ff IS 'Fingerfertigkeit';

COMMENT ON COLUMN Eigenschaften.ge IS 'Gewandheit';

COMMENT ON COLUMN Eigenschaften.ko IS 'Konstitution';

COMMENT ON COLUMN Eigenschaften.kk IS 'Körperkraft';

/* ---------------------------------------------------------------------- */
/* Add foreign key constraints                                            */
/* ---------------------------------------------------------------------- */

ALTER TABLE Eigenschaften ADD CONSTRAINT Charakter_Eigenschaften 
    FOREIGN KEY (charakter_id) REFERENCES Charakter (charakter_id) ON DELETE CASCADE;
