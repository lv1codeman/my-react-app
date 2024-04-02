function Body() {
  const item1 = 'apple';
  const item2 = 'banana';
  const item3 = 'orange';
  const item4 = 'grape';
  const item5 = 'guava';

  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3.toUpperCase()}</li>
      <li>{item4}</li>
      <li>{item5}</li>
    </ul>
  );
}
export default Body