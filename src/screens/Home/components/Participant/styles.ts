import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#FFF',
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: '#D10000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 24,
    color: '#FFF'
  }
})