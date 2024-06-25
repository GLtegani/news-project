'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
   body {
      margin: 0;
      background-color: #181817;
      color: #e5e5e1;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   #page {
      width: 90%;
      max-width: 60rem;
      margin: 2rem auto;
   }

   #main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
   }

   #logo {
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      border-radius: 4px;
   }

   #main-header #logo a,
   #main-header #logo a:hover {
      color: #e1e1d7;
      text-decoration: none;
   }

   #main-header ul {
      display: flex;
      gap: 2rem;
      font-weight: bold;
   }

   #main-header ul a {
      text-decoration: none;
      color: #e5e5e1;
      padding: 0.5rem 1rem;
      border-radius: 4px;
   }

   #main-header ul a:hover,
   #main-header ul a.active {
      background-color: #bcbcb7;
      color: #181817;
   }

   #home {
      margin: 3rem auto;
      max-width: 50rem;
      text-align: center;
   }

   #home img {
      width: 8rem;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 #181817;
   }

   #home h1 {
      margin-top: 3rem;
      font-size: 2.5rem;
   }

   #home p {
      margin: 2rem 0;
      color: #bcbcb7;
      font-size: 1.1rem;
   }

   #home a {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #bcbcb7;
      color: #181817;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 2rem;
   }

   #home a:hover {
      background-color: #e5e5e1;
   }

   .news-list {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
   }

   .news-list a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      color: #e5e5e1;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.2rem;
      padding: 0 0 1rem 0;
   }

   .news-list a img {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      border-radius: 4px;
   }

   .news-list a:hover {
      background-color: #2d2d2b;
   }

   .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .news-article img {
      width: 7rem;
      margin-bottom: 1rem;
      border-radius: 4px;
   }

   .modal {
      background-color: #bababa;
      padding: 2rem;
      border-radius: 4px;
      border: none;
      box-shadow: 0 0 10px 0 #181817;
      max-width: 50rem;
      width: 100%;
   }

   .modal h2,
   .modal h1 {
      margin: 0;
   }

   #archive-header ul {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
   }

   #archive-header ul a {
      text-decoration: none;
      color: #b0b0a6;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1.25rem;
   }

   #archive-header ul a:hover,
   #archive-header ul a.active {
      color: #e5e5e1;
   }

   #archive-filter {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #b0b0a6;
   }

   .error {
      text-align: center;
      margin-top: 3rem;
   }

`