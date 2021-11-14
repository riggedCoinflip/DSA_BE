/* ---------------------------------------------------------------------- */
/* Script generated with: DeZign for Databases 12.4.2                     */
/* Target DBMS:           PostgreSQL 12                                   */
/* Project file:          Project1.dez                                    */
/* Project name:                                                          */
/* Author:                                                                */
/* Script type:           Database drop script                            */
/* Created on:            2021-11-14 15:27                                */
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
/* Drop foreign key constraints                                           */
/* ---------------------------------------------------------------------- */

ALTER TABLE Eigenschaften DROP CONSTRAINT Charakter_Eigenschaften;

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

/* ---------------------------------------------------------------------- */
/* Drop table "Charakter"                                                 */
/* ---------------------------------------------------------------------- */

/* Drop constraints */

DROP TABLE Charakter;
