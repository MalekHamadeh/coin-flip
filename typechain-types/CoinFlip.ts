/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface CoinFlipInterface extends utils.Interface {
  contractName: "CoinFlip";
  functions: {
    "depositFunds()": FunctionFragment;
    "getGameCount()": FunctionFragment;
    "getGameEntry(uint256)": FunctionFragment;
    "kill()": FunctionFragment;
    "max()": FunctionFragment;
    "min()": FunctionFragment;
    "owner()": FunctionFragment;
    "payPercentage()": FunctionFragment;
    "play()": FunctionFragment;
    "withdrawFunds(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGameCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGameEntry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(functionFragment: "max", values?: undefined): string;
  encodeFunctionData(functionFragment: "min", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "play", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameEntry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "play", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;

  events: {
    "Status(string,address,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Status"): EventFragment;
}

export type StatusEvent = TypedEvent<
  [string, string, BigNumber, boolean],
  { message: string; user: string; amount: BigNumber; winner: boolean }
>;

export type StatusEventFilter = TypedEventFilter<StatusEvent>;

export interface CoinFlip extends BaseContract {
  contractName: "CoinFlip";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoinFlipInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    depositFunds(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGameCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGameEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        addr: string;
        blocknumber: BigNumber;
        blocktimestamp: BigNumber;
        bet: BigNumber;
        prize: BigNumber;
        winner: boolean;
      }
    >;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    max(overrides?: CallOverrides): Promise<[BigNumber]>;

    min(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    play(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFunds(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositFunds(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGameCount(overrides?: CallOverrides): Promise<BigNumber>;

  getGameEntry(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      addr: string;
      blocknumber: BigNumber;
      blocktimestamp: BigNumber;
      bet: BigNumber;
      prize: BigNumber;
      winner: boolean;
    }
  >;

  kill(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  max(overrides?: CallOverrides): Promise<BigNumber>;

  min(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  payPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  play(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFunds(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositFunds(overrides?: CallOverrides): Promise<void>;

    getGameCount(overrides?: CallOverrides): Promise<BigNumber>;

    getGameEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        addr: string;
        blocknumber: BigNumber;
        blocktimestamp: BigNumber;
        bet: BigNumber;
        prize: BigNumber;
        winner: boolean;
      }
    >;

    kill(overrides?: CallOverrides): Promise<void>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    payPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    play(overrides?: CallOverrides): Promise<void>;

    withdrawFunds(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Status(string,address,uint256,bool)"(
      message?: null,
      user?: null,
      amount?: null,
      winner?: null
    ): StatusEventFilter;
    Status(
      message?: null,
      user?: null,
      amount?: null,
      winner?: null
    ): StatusEventFilter;
  };

  estimateGas: {
    depositFunds(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGameCount(overrides?: CallOverrides): Promise<BigNumber>;

    getGameEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    play(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFunds(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositFunds(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGameCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGameEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    min(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    play(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFunds(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
