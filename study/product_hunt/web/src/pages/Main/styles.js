import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  a {
    height: 42px;
    border: 1px solid #da552f;
    border-radius: 4px;
    background: none;
    margin-top: 10px;
    color: #da552f;
    text-decoration: none;
    margin-top: 8px;
    padding: 1px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s;

    :hover {
      background: #da552f;
      color: white;
    }
    }

    .actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background: #da552f;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        :hover{
         opacity: 0.7
        }

        :disabled{
          opacity: 0.01;
        }
      }
    }

`;
