/* ---------------------------------------------------------------------- */
/* Script generated with: DeZign for Databases 12.4.2                     */
/* Target DBMS:           PostgreSQL 12                                   */
/* Project file:          DSA.dez                                         */
/* Project name:          DSA                                             */
/* Author:                riggedCoinflip                                  */
/* Script type:           Database creation script                        */
/* Created on:            2021-11-15 14:39                                */
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
/* Add tables                                                             */
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/* Add table "Eigenschaften"                                              */
/* ---------------------------------------------------------------------- */

CREATE TABLE Eigenschaften (
    eigenschaften_id SERIAL  NOT NULL,
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
/* Add table "Charaktere"                                                 */
/* ---------------------------------------------------------------------- */



CREATE TABLE Charaktere (
    charaktere_id SERIAL  NOT NULL,
    name CHARACTER(60),
    gewicht SMALLINT,
    eigenschaften_id INTEGER  NOT NULL,
    PRIMARY KEY (charaktere_id)
);



/* ---------------------------------------------------------------------- */
/* Add foreign key constraints                                            */
/* ---------------------------------------------------------------------- */

ALTER TABLE Charaktere ADD CONSTRAINT Eigenschaften_Charaktere 
    FOREIGN KEY (eigenschaften_id) REFERENCES Eigenschaften (eigenschaften_id);
