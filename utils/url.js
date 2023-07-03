export const getUrl = () => {
    return process.env.NEXT_PUBLIC_PUBLIC_URL || process.env.VERCEL_URL;
}