import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Quick Todo</Text>
      </View>
    </View>
  );
};

const SignupForm = ({navigation}) => {
  return (
    <View>
      <Text style={styles.bannerText}>Sign Up</Text>
      <Text style={styles.bannerCaption}>Setup your own account</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput placeholder="placeholder" style={styles.inputField} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput placeholder="placeholder" style={styles.inputField} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput placeholder="placeholder" style={styles.inputField} />
      </View>
      <View style={styles.signupButtonContainer}>
        <Button
          style={styles.signupButton}
          onPress={() => console.log('nothing happened')}
          title="Sign Up"
          color="#0A1412"
          accessibilityLabel="Sign Up"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have an Account?</Text>
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={[styles.footerText, styles.linkText]}>
          {' '}
          Sign In
        </Text>
      </View>
    </View>
  );
};

const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo />
        <SignupForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logoText: {
    color: '#3DA9FC',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 94,
    marginTop: 38,
  },
  logo: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 26,
    borderColor: '#3DA9FC',
    borderWidth: 1,
    fontWeight: '600',
    fontSize: 24,
    width: 148,
  },
  bannerText: {
    lineHeight: 48,
    color: '#3DA9FC',
    fontWeight: '700',
    fontSize: 24,
  },
  bannerCaption: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 48,
  },
  inputField: {
    borderColor: '#BACDD9',
    borderWidth: 1,
    padding: 12,
    backkground: '#FDFEFE',
    borderRadius: 4,
  },
  inputLabel: {
    width: 312,
    height: 24,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#0A1412',
  },
  inputGroup: {
    marginBottom: 14,
  },
  signupButtonContainer: {
    marginTop: 10,
    borderRadius: 4,
    marginBottom: 64,
    backgroundColor: '#3DA9FC',
  },
  signupButton: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
  },
  footerText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
  linkText: {
    color: '#3DA9FC',
  },
});

export default Signup;
