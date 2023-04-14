"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon } from "wagmi/chains";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit';


function Myproject() {
    const connectors = connectorsForWallets([
        {
            groupName: 'Social',
            wallets: [
                googleWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } }),
                facebookWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } }),
                githubWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } }),
                discordWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } }),
                twitchWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } }),
                twitterWallet({ options: { projectId: "0x3d3faa020bcba108a6f8fd03d71af0ea746167ccdb8736cc86c514a8c152fc33" } })
            ],
        },
    ]);

    const { chains, provider, webSocketProvider } = configureChains(
        [polygon],
        [publicProvider()],
    );
    const client = createClient({
        autoConnect: false,
        connectors,
        provider,
        webSocketProvider,
    });

    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains} modalSize={'compact'}>
                <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default Myproject;