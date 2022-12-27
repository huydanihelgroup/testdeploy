import Card from '../../atoms/NewSmallCard/Card';
import Footer from '../../atoms/NewFooter/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/NewNavbar/Navbar';
import { ILeaderboardProps } from './Leaderboard.types';
import './Leaderboard.css';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { ICardProps, Variant } from '../../atoms/NewSmallCard/Card.types';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import React, { useCallback, useMemo, useRef } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { claimContract } from '../../../methods/claimContract';
import { IData } from './interface';

const Leaderboard = ({
  navbarProps,
  footerProps,
  title,
  cardProps,
  account,
  connect,
  copy,
  icon = '/download.png',
}: ILeaderboardProps) => {
  const queryClaimer = `
    query {
        logClaims(
          orderBy:id
          first: 1000
        ) {
          user
        }
          }
    `;

  const APIURL =
    'https://api.thegraph.com/subgraphs/name/luiscmogrovejo/very-banking';

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  async function getGraph() {
    client
      .query({
        query: gql(queryClaimer),
      })
      .then(async (data: { data: any }) => {
        console.log('data', data.data);
        const tCount = await claimContract.methods.pointsClaimed().call();
        setTotalPoints(tCount);
        let newData: any = [];
        const search = data.data.logClaims.length;
        setTotalPlayers(search);
        console.log('search', search);
        if (search > 0) {
          for (let i = 0; i < search; i++) {
            const user: string = data.data.logClaims[i].user.toString();
            console.log(user);
            const userPoints = await claimContract.methods
              .userPoints(user)
              .call();
            let walletId: string = user;
            let ownership: number = (userPoints / tCount) * 100;
            let singleRow = {
              walletId,
              ownership,
            };
            newData.push(singleRow);
          }
          setHistory(newData);
          console.log('new data', newData);
        }
      })
      .catch((err: any) => {
        console.log('Error fetching data: ', err);
      });
  }

  function hashValueGetter(params: ValueGetterParams) {
    return params.node
      ? params.node.rowIndex === null
        ? null
        : params.node.rowIndex + 1
      : null;
  }

  const [history, setHistory] = React.useState<any>([]);
  const [totalPoints, setTotalPoints] = React.useState<number>(0);
  const [totalPlayers, setTotalPlayers] = React.useState<number>(0);
  const rowData = history;
  const [columnDefs] = React.useState<ColDef[]>([
    {
      headerName: '#',
      colId: 'rowNum',
      valueGetter: hashValueGetter,
      width: 75,
      pinned: 'left',
      cellStyle: { fontWeight: 'bold' },
    },

    {
      field: 'walletId',
      width: 158,
      cellRenderer: (props: any) => {
        return `${props.data.walletId.slice(
          0,
          8,
        )}...${props.data.walletId.slice(-4)}`;
      },
    },
    {
      field: 'ownership',
      width: 163,
      sort: 'desc' as any,
      cellRenderer: (props: any) => {
        return `${props.value.toFixed(4)}%`;
      },
    },
  ]);

  React.useEffect(() => {
    getGraph();
    // eslint-disable-next-line
  }, []);

  const newCard1: ICardProps = {
    heading: totalPlayers ? totalPlayers.toString() : 'N/A',
    body: 'Total Owners',
    icon: 'TotalOwners.png',
    variant: 'nft' as Variant,
  };
  const newCard2: ICardProps = {
    heading: totalPoints ? totalPoints.toString() : 'N/A',
    body: 'Total Points',
    icon: 'TotalPoints.png',
    variant: 'nft2' as Variant,
  };
  const gridRef = useRef<AgGridReact<IData>>(null);
  const onPageSizeChanged = useCallback(() => {
    var value = (document.getElementById('page-size') as HTMLInputElement)
      .value;
    gridRef.current!.api.paginationSetPageSize(Number(value));
  }, []);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: false,
      enableRowGroup: false,
      enablePivot: false,
      enableValue: false,
      sortable: false,
      resizable: false,
      filter: false,
      flex: 1,
      minWidth: 80,
    };
  }, []);
  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-32">
        <Layout variant="wide">
          <div className="mt-6">
            <h3 className="font-bold text-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#442095] to-[#6B90CB]">
              {title}
            </h3>
          </div>
          <div className="flex justify-center m-2">
            <div className="w-[32rem]">
              <div className="flex items-center flex-wrap justify-around">
                <div className="w-[220px] mt-5">
                  <Card {...newCard1} />
                </div>
                <div className="w-[220px] mt-5">
                  <Card {...newCard2} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-[30rem]">
              <Card variant="custom">
                <div className="w-full h-full flex justify-center pt-4 pb-8">
                  <div
                    className="ag-theme-alpine"
                    style={{ height: 518, width: 420 }}
                  >
                    <AgGridReact<IData>
                      ref={gridRef}
                      rowData={rowData}
                      columnDefs={columnDefs}
                      pagination={true}
                      defaultColDef={defaultColDef}
                      paginationPageSize={10}
                    ></AgGridReact>
                    <div className="example-header flex justify-center">
                      Page Size:
                      <select onChange={onPageSizeChanged} id="page-size">
                        <option value="10" selected={true}>
                          10
                        </option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};
export default Leaderboard;
