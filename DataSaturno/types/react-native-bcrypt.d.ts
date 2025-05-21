declare module 'react-native-bcrypt' {
  export function genSaltSync(rounds: number): string
  export function hashSync(data: string, salt: string): string
  export function compareSync(data: string, encrypted: string): boolean
  export function genSalt(rounds: number, callback: (err: Error | null, salt: string) => void): void
  export function hash(data: string, salt: string, callback: (err: Error | null, encrypted: string) => void): void
  export function compare(data: string, encrypted: string, callback: (err: Error | null, same: boolean) => void): void
}
