import { Stack } from 'expo-router';

export default function LoansLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Loans' }} />
        </Stack>
    );
}