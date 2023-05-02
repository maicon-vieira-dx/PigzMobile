import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input({ label, placeholder, value, onChange}) {
  
  const handleChangeText = (text) => {
    onChange(text)
  }

  return (
    <View style={style.form}>
      <Text style={style.label}>{label}</Text>
      <TextInput
      placeholder={placeholder}
      placeholderTextColor="#4B4B4B"
      value={value}
      onChangeText={handleChangeText}
      style={style.input}/>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#FA641E',
    borderRadius: 7,
    paddingLeft: 20,
  },
  form: {
    marginTop: 20
  },
  label: {
    marginBottom: 10
  }
});
