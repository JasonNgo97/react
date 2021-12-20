const strengthPoints = {
  letters: 5,
  numbers: 10,
  symbols: 15,
};

export const isNullSafe = (input: String) => {
  return input !== undefined && input !== '';
};

export const isValidPassword = (input: String) => {
  return input.length >= 8;
};

export const isValidEmail = (email: String) => {
  const re = /\S+@\S+\.\S+\S+/;
  return re.test(String(email).toLowerCase());
};

export const passwordStrengthPoint = (password: string) => {
  console.log('password', password);
  if (password.length) {
    const lettersCount = (password.match(/[A-Z]/gi) || []).length;
    const numbersCount = (password.match(/[0-9]/g) || []).length;
    const symbolsCount = (
      password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) || []
    ).length;

    const size = password.length;
    let strengthsSum =
      lettersCount * strengthPoints.letters +
      numbersCount * strengthPoints.numbers +
      symbolsCount * strengthPoints.symbols;

    let strength = (strengthsSum * size) / 3;

    console.log('strength', strength);

    if (lettersCount > 0 && numbersCount > 0 && symbolsCount > 0 && size > 7) {
      return 100 <= strength && strength < 300
        ? 2
        : 300 <= strength && strength < 500
        ? 3
        : 4;
    } else {
      console.log(`${lettersCount}, ${numbersCount}, ${symbolsCount}, ${size}`);
      return 1;
    }
  }
};
