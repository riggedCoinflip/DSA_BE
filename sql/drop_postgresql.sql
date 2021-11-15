/* ---------------------------------------------------------------------- */
/* Script generated with: DeZign for Databases 12.4.2                     */
/* Target DBMS:           PostgreSQL 12                                   */
/* Project file:          DSA.dez                                         */
/* Project name:          DSA                                             */
/* Author:                riggedCoinflip                                  */
/* Script type:           Database drop script                            */
/* Created on:            2021-11-15 14:39                                */
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
/* Drop foreign key constraints                                           */
/* ---------------------------------------------------------------------- */

ALTER TABLE Charaktere DROP CONSTRAINT Eigenschaften_Charaktere;

/* ---------------------------------------------------------------------- */
/* Drop table "Charaktere"                                                */
/* ---------------------------------------------------------------------- */

/* Drop constraints */

DROP TABLE Charaktere;

/* ---------------------------------------------------------------------- */
/* Drop table "Eigenschaften"                                             */
/* ---------------------------------------------------------------------- */

/* Drop constraints */

ALTER TABLE Eigenschaften DROP CONSTRAINT PK_Eigenschaften;

COMMENT ON COLUMN Eigenschaften.mu IS NULL;

COMMENT ON COLUMN Eigenschaften.kl IS NULL;

COMMENT ON COLUMN Eigenschaften.in_ IS NULL;

COMMENT ON COLUMN Eigenschaften.ch IS NULL;

COMMENT ON COLUMN Eigenschaften.ff IS NULL;

COMMENT ON COLUMN Eigenschaften.ge IS NULL;

COMMENT ON COLUMN Eigenschaften.ko IS NULL;

COMMENT ON COLUMN Eigenschaften.kk IS NULL;

DROP TABLE Eigenschaften;
