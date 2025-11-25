import express from "express";
import { TryCatch } from "./TryCatch.js";
import { sql } from "./config/db.js";
import { redisClient } from "./index.js";

export const getAllAlbum = TryCatch(async (req, res) => {
  let albums;
  const CACHE_EXPIRY = 1800;

  if (redisClient.isReady) {
    albums = await redisClient.get("albums");
  }

  if (albums) {
    console.log("Cache hit");
    res.json(JSON.parse(albums));
    return;
  } else {
    console.log("Cache miss");
    albums = await sql`SELECT * FROM albums`;

    if (redisClient.isReady) {
      await redisClient.set("albums", JSON.stringify(albums), {
        EX: CACHE_EXPIRY,
      });
    }
  }

  res.json(albums);
  return
});

export const getAllsongs = TryCatch(async (req, res) => {
  let songs;

  songs = await sql`SELECT * FROM songs`;

  res.json(songs);
});

export const getAllSongsofAlbum = TryCatch(async (req, res) => {
  const { id } = req.params;

  let album, songs;

  album = await sql`SELECT * FROM albums WHERE id=${id}`;
  if (album.length === 0) {
    res.status(404).json({
      message: "No album with this id",
    });
    return;
  }

  songs = await sql`SELECT * FROM songs WHERE album_id=${id}`;

  const response = { album: album[0], songs };

  res.json(response);
});

export const getSingleSong = TryCatch(async (req, res) => {
  const song = await sql`SELECT * FROM songs WHERE id = ${req.params.id}`;

  res.json(song[0]);
});
