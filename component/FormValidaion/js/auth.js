const inputStatus = {
  userid: {
    RegExp: /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    errorMessage: '올바른 아이디 형식을 입력하세요.',
    status: false,
  },
  password: {
    RegExp: /^[A-Za-z0-9]{6,12}$/,
    errorMessage: '영문 또는 숫자를 6-12자 입력하세요.',
    status: false,
  },
  username: {
    RegExp: /(.)/,
    errorMessage: '이름을 입력해주세요.',
    status: false,
  },
  'confirm-password': {
    errorMessage: '패스워드가 일치하지 않습니다.',
    status: false,
  },
};

const isSubmit = allInputOfForm =>
  [...allInputOfForm].every(inputType => inputStatus[inputType.name].status);

const isSamePassword = confirmPassword =>
  confirmPassword === document.getElementById('signup-password').value;

export { inputStatus, isSubmit, isSamePassword };
