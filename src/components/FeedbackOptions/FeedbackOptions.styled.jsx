import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  color: #524f4e;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: white;
    transform: translateY(-2px);

    background: ${({ option }) => {
      switch (option) {
        case 'good':
          return '#2ee59d';

        case 'neutral':
          return 'rgb(46, 171, 229)';

        case 'bad':
          return 'rgb(229, 46, 77)';

        default:
          return;
      }
    }};

    box-shadow: ${({ option }) => {
      switch (option) {
        case 'good':
          return '0 4px 20px rgba(46, 229, 157, 0.4)';

        case 'neutral':
          return '0 4px 20px rgba(46, 171, 229, 0.4)';

        case 'bad':
          return '0 4px 20px rgba(229, 46, 77, 0.4)';

        default:
          return;
      }
    }};
  }
`;
