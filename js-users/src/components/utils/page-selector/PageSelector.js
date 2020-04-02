import React from "react";
import styled, { css } from "styled-components";
import useQueryParams from "hooks/useQueryParams";
import { Redirect, Link } from "react-router-dom";

const Selector = styled.div`
  display: flex;
`;

const PageNum = styled(Link)`
  width: 30px;
  height: 30px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: bold;
  ${props => css`
    color: ${props.theme.colors.blue};
    background: ${props.theme.colors.light};
    box-shadow: 2px 2px 2px ${props.theme.colors.lightShadow},
      -2px -2px 2px ${props.theme.colors.lightShadow},
      -2px 2px 2px ${props.theme.colors.lightShadow},
      2px -2px 2px ${props.theme.colors.lightShadow};
  `}
  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.light};
      background: ${props.theme.colors.blue};
    `}
`;

const PageSelector = ({ path = "/", itemPerPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const { page } = useQueryParams();
  const actPage = page ? parseInt(page) : 1;

  const pages = [];
  const firstToShow = actPage - 2 > 0 ? actPage - 2 : 1;
  const lastToShow = actPage + 2 <= totalPages ? actPage + 2 : totalPages;

  for (let i = firstToShow; i <= lastToShow; i++) {
    pages.push(i);
  }

  if (actPage <= 0 || actPage > totalPages) {
    return <Redirect to={path} />;
  }

  return (
    <Selector>
      {pages.map(num => (
        <PageNum
          to={num > 1 ? `${path}?page=${num}` : path}
          key={num}
          selected={actPage === num}
        >
          {num}
        </PageNum>
      ))}
    </Selector>
  );
};

export default PageSelector;
