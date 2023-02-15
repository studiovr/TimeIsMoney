import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

export function Set(key: string, value: string) {
	console.log("2112value = ", value)
	return RNSecureKeyStore.set(key, value, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
		.then((res) => {
			console.log(res + " " + value);
		}, (err) => {
			console.log(err);
		});
}

export function Get(key: string) {
	return RNSecureKeyStore.get(key);
}

export function Remove(key: string) {
	return RNSecureKeyStore.remove(key)
		.then((res) => {
			console.log(res);
		}, (err) => {
			console.log(err);
		});
}