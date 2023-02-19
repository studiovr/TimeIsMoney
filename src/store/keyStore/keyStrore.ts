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

export async function Get(key: string) {
	return await RNSecureKeyStore.get(key);
}

export function Remove(key: string) {
	return RNSecureKeyStore.remove(key)
		.then((res) => {
			console.log(res + " " + key);
		}, (err) => {
			console.log(err);
		});
}
