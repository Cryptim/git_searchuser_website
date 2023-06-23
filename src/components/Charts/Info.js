import React from "react";
import { GithubContext } from "../../content/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiuserPlus } from "react-icon/fi";
const userInfo = () => {
  const data = React.useContext(GithubContext);
  return <h2>User Info component:{data}</h2>;
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: minmax(repeat(auto-fill, minmax(250px, 1fr)));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grif=template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
  }
  span{
    width:3rem;
    height:3rem;
    place-items:center;
    display:grid;
    place-items:center;
  }
  .pink{
    background:#ffe0f0
    color:#da4a91
  }
  .green{

  }
`;
export default userInfo;
