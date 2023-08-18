function AddTodo({ submitHandle, onChange, state }) {
  console.log("ADDTODO rendered");
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={state.todo} onChange={onChange}></input>
      <button type="submit">Ekle</button>
    </form>
  );
}

export default AddTodo;

// addTodo ya memo kullansamda tekrar render oluyo cünkü eger componentime prop olarak metot yani fonksiyon
//geciyosam bu fonkisyonlarıda bellekte tutmam gerek memo yapmam gerek ve degismediyse eger

//metotlarımı useCallback de tutucam
