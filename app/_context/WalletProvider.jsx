// "use client"
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider,useConfig } from "wagmi";
// import { mainnet, polygon, opBNBTestnet, bscTestnet } from "wagmi/chains";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import * as React from "react";

// const config = getDefaultConfig({
//     appName: "My RainbowKit App",
//     projectId: "95f8ce26a83baf6d9b6db95a07e082a1",
//     chains: [opBNBTestnet, bscTestnet],
//     ssr: false, // If your dApp uses server side rendering (SSR)
// });

// const queryClient = new QueryClient();

// export function Providers({ children }) {
//     const [mounted, setMounted] = React.useState(false);
//     React.useEffect(() => setMounted(true), []);
    
//     return (
//         <WagmiProvider config={config}>
//             <QueryClientProvider client={queryClient}>
//                 <RainbowKitProvider>{mounted && children}</RainbowKitProvider>
//             </QueryClientProvider>
//         </WagmiProvider>
//     );
// }