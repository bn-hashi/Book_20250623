type DateChangeProps = { 
  date?: string; 
  }; 
  export const DateChange = ({ date }: DateChangeProps) => { 
  if (!date) return <p className = "text-xs" ></p> ; 
  
  const dateChange = new Date (date); 

  if (isNaN (dateChange.getTime())) { 
    return   <p className = "text-xs" ></p> ; 
  } 
  const changeFormat = ` ${dateChange.getFullYear()} / ${
    dateChange.getMonth() + 1 
  } / ${dateChange.getDate()} ` ; 
  return   <p className = "text-xs" > {changeFormat} </p> ; 
  };