"use client";

import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 3rem auto;
  max-width: 50rem;
  text-align: center;

  img {
    border-radius: 50%;
    box-shadow: 0 0 10px 0 #181817;
  }

  h1 {
    margin-top: 3rem;
    font-size: 2.5rem;
  }

  p {
    margin: 2rem 0;
    color: #bcbcb7;
    font-size: 1.1rem;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #bcbcb7;
    color: #181817;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 2rem;
  }

  a:hover {
    background-color: #e5e5e1;
  }
`;
