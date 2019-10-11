import React, { useState } from 'react';

const Form = props => {

  const [data, setData] = useState({

  });

  return (
    <form>
      <label>
        name: <input />
      </label> <br />

      <label>
        email: <input />
      </label> <br />

      <label>
        role: <input />
      </label>
    </form>
  )

}

export default Form;