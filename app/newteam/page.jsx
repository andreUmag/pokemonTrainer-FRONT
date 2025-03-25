"use client";
import "./teams.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function teamsPage() {
 

  return (
    <div className="teamsPage grid justify-center mt-[100px]">
      <div className="myteams grid justify-center">
        <div className="nav flex justify-center ">
        <input type="text" placeholder="NOMBRE DEL EQUIPO"/>
        </div>
        <div className="cardsTeams flex justify-center m-5">
          
        </div>
      </div>
      <div className="pokemonsSelect">
        <Link href="/home">
          <button className="gradient-button">Volver al Inicio</button>
        </Link>
        <p>Crear equipo proximamente</p>
      </div>
    </div>
  );
}

export default teamsPage;
