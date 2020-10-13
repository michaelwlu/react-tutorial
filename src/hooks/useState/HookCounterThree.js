import React, { useState } from 'react';

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h3>First name: {name.firstName}</h3>
        <h3>Last name: {name.lastName}</h3>
        <h3>{JSON.stringify(name)}</h3>
      </form>
    </div>
  );
};

export default HookCounterThree;
