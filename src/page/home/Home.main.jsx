import { useHistory } from 'react-router-dom';

const useHandlers = () => {
  const history = useHistory();

  const handleClickButtonExcel = () => {
    history.push('/excel');
    
  };

  return {
    handleClickButtonExcel
  };
};

export default useHandlers;
