function TextButton(params) {
    console.log(params);

    let obj = {
        name: "John",
        age: 8,
        address: "232 street",
        phoneNumber: "55598549876"
    }

    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.address);
    console.log(obj.phoneNumber);

    let { name, age, address } = obj;

    console.log(name);
    console.log(age);
    return (
      <button type='button'>
          {params.label}
      </button>
    );
}

export default TextButton;