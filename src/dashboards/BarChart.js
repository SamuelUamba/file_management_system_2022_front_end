import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class GraficoBarras extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    var requerimentos = this.props.requerimentos;
    var notasEntradas = this.props.notasEntradas;
    var notasSaidas = this.props.notasSaidas;
    var audiencias = this.props.audiencias;

    var qntReq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var qntNotEnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var qntNotSaid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var qntAud = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (this.props.requerimentos) {
      for (let requerimento of requerimentos) {
        if (requerimento.data_entrada.substring(5, 7) == "01")
          qntReq[0] = 1 + qntReq[0];
        if (requerimento.data_entrada.substring(5, 7) == "02")
          qntReq[1] = 1 + qntReq[1];
        if (requerimento.data_entrada.substring(5, 7) == "03")
          qntReq[2] = 1 + qntReq[2];
        if (requerimento.data_entrada.substring(5, 7) == "04")
          qntReq[3] = 1 + qntReq[3];
        if (requerimento.data_entrada.substring(5, 7) == "05")
          qntReq[4] = 1 + qntReq[4];
        if (requerimento.data_entrada.substring(5, 7) == "06")
          qntReq[5] = 1 + qntReq[5];
        if (requerimento.data_entrada.substring(5, 7) == "07")
          qntReq[6] = 1 + qntReq[6];
        if (requerimento.data_entrada.substring(5, 7) == "08")
          qntReq[7] = 1 + qntReq[7];
        if (requerimento.data_entrada.substring(5, 7) == "09")
          qntReq[8] = 1 + qntReq[8];
        if (requerimento.data_entrada.substring(5, 7) == "10")
          qntReq[9] = 1 + qntReq[9];
        if (requerimento.data_entrada.substring(5, 7) == "11")
          qntReq[10] = 1 + qntReq[10];
        if (requerimento.data_entrada.substring(5, 7) == "12")
          qntReq[11] = 1 + qntReq[11];
      }
    }
    if (this.props.notasEntradas) {
      for (let notasEntrada of notasEntradas) {
        if (notasEntrada.data_entrada.substring(5, 7) == "01")
          qntNotEnt[0] = 1 + qntNotEnt[0];
        if (notasEntrada.data_entrada.substring(5, 7) == "02")
          qntNotEnt[1] = 1 + qntNotEnt[1];
        if (notasEntrada.data_entrada.substring(5, 7) == "03")
          qntNotEnt[2] = 1 + qntNotEnt[2];
        if (notasEntrada.data_entrada.substring(5, 7) == "04")
          qntNotEnt[3] = 1 + qntNotEnt[3];
        if (notasEntrada.data_entrada.substring(5, 7) == "05")
          qntNotEnt[4] = 1 + qntNotEnt[4];
        if (notasEntrada.data_entrada.substring(5, 7) == "06")
          qntNotEnt[5] = 1 + qntNotEnt[5];
        if (notasEntrada.data_entrada.substring(5, 7) == "07")
          qntNotEnt[6] = 1 + qntNotEnt[6];
        if (notasEntrada.data_entrada.substring(5, 7) == "08")
          qntNotEnt[7] = 1 + qntNotEnt[7];
        if (notasEntrada.data_entrada.substring(5, 7) == "09")
          qntNotEnt[8] = 1 + qntNotEnt[8];
        if (notasEntrada.data_entrada.substring(5, 7) == "10")
          qntNotEnt[9] = 1 + qntNotEnt[9];
        if (notasEntrada.data_entrada.substring(5, 7) == "11")
          qntNotEnt[10] = 1 + qntNotEnt[10];
        if (notasEntrada.data_entrada.substring(5, 7) == "12")
          qntNotEnt[11] = 1 + qntNotEnt[11];
      }
    }
    if (this.props.notasSaidas) {
      for (let notasSaida of notasSaidas) {
        if (notasSaida.data_saida.substring(5, 7) == "01")
          qntNotSaid[0] = 1 + qntNotSaid[0];
        if (notasSaida.data_saida.substring(5, 7) == "02")
          qntNotSaid[1] = 1 + qntNotSaid[1];
        if (notasSaida.data_saida.substring(5, 7) == "03")
          qntNotSaid[2] = 1 + qntNotSaid[2];
        if (notasSaida.data_saida.substring(5, 7) == "04")
          qntNotSaid[3] = 1 + qntNotSaid[3];
        if (notasSaida.data_saida.substring(5, 7) == "05")
          qntNotSaid[4] = 1 + qntNotSaid[4];
        if (notasSaida.data_saida.substring(5, 7) == "06")
          qntNotSaid[5] = 1 + qntNotSaid[5];
        if (notasSaida.data_saida.substring(5, 7) == "07")
          qntNotSaid[6] = 1 + qntNotSaid[6];
        if (notasSaida.data_saida.substring(5, 7) == "08")
          qntNotSaid[7] = 1 + qntNotSaid[7];
        if (notasSaida.data_saida.substring(5, 7) == "09")
          qntNotSaid[8] = 1 + qntNotSaid[8];
        if (notasSaida.data_saida.substring(5, 7) == "10")
          qntNotSaid[9] = 1 + qntNotSaid[9];
        if (notasSaida.data_saida.substring(5, 7) == "11")
          qntNotSaid[10] = 1 + qntNotSaid[10];
        if (notasSaida.data_saida.substring(5, 7) == "12")
          qntNotSaid[11] = 1 + qntNotSaid[11];
      }
    }
    if (this.props.audiencias) {
      for (let audiencia of audiencias) {
        if (audiencia.data_marcacao.substring(5, 7) == "01")
          qntAud[0] = 1 + qntAud[0];
        if (audiencia.data_marcacao.substring(5, 7) == "02")
          qntAud[1] = 1 + qntAud[1];
        if (audiencia.data_marcacao.substring(5, 7) == "03")
          qntAud[2] = 1 + qntAud[2];
        if (audiencia.data_marcacao.substring(5, 7) == "04")
          qntAud[3] = 1 + qntAud[3];
        if (audiencia.data_marcacao.substring(5, 7) == "05")
          qntAud[4] = 1 + qntAud[4];
        if (audiencia.data_marcacao.substring(5, 7) == "06")
          qntAud[5] = 1 + qntAud[5];
        if (audiencia.data_marcacao.substring(5, 7) == "07")
          qntAud[6] = 1 + qntAud[6];
        if (audiencia.data_marcacao.substring(5, 7) == "08")
          qntAud[7] = 1 + qntAud[7];
        if (audiencia.data_marcacao.substring(5, 7) == "09")
          qntAud[8] = 1 + qntAud[8];
        if (audiencia.data_marcacao.substring(5, 7) == "10")
          qntAud[9] = 1 + qntAud[9];
        if (audiencia.data_marcacao.substring(5, 7) == "11")
          qntAud[10] = 1 + qntAud[10];
        if (audiencia.data_marcacao.substring(5, 7) == "12")
          qntAud[11] = 1 + qntAud[11];
      }
    }

    var data = [
      {
        name: "Jan",
        Requerimentos: qntReq[0],
        Nota_entrada: qntNotEnt[0],
        Nota_saida: qntNotSaid[0],
        Audiencia: qntAud[0],
      },
      {
        name: "Fev",
        Requerimentos: qntReq[1],
        Nota_entrada: qntNotEnt[1],
        Nota_saida: qntNotSaid[1],
        Audiencia: qntAud[1],
      },
      {
        name: "Mar",
        Requerimentos: qntReq[2],
        Nota_entrada: qntNotEnt[2],
        Nota_saida: qntNotSaid[2],
        Audiencia: qntAud[2],
      },
      {
        name: "Abr",
        Requerimentos: qntReq[3],
        Nota_entrada: qntNotEnt[3],
        Nota_saida: qntNotSaid[3],
        Audiencia: qntAud[3],
      },
      {
        name: "Mai",
        Requerimentos: qntReq[4],
        Nota_entrada: qntNotEnt[4],
        Nota_saida: qntNotSaid[4],
        Audiencia: qntAud[4],
      },
      {
        name: "Jun",
        Requerimentos: qntReq[5],
        Nota_entrada: qntNotEnt[5],
        Nota_saida: qntNotSaid[5],
        Audiencia: qntAud[5],
      },
      {
        name: "Jul",
        Requerimentos: qntReq[6],
        Nota_entrada: qntNotEnt[6],
        Nota_saida: qntNotSaid[6],
        Audiencia: qntAud[6],
      },
      {
        name: "Ago",
        Requerimentos: qntReq[7],
        Nota_entrada: qntNotEnt[7],
        Nota_saida: qntNotSaid[7],
        Audiencia: qntAud[7],
      },
      {
        name: "Set",
        Requerimentos: qntReq[8],
        Nota_entrada: qntNotEnt[8],
        Nota_saida: qntNotSaid[8],
        Audiencia: qntAud[8],
      },
      {
        name: "Out",
        Requerimentos: qntReq[9],
        Nota_entrada: qntNotEnt[9],
        Nota_saida: qntNotSaid[9],
        Audiencia: qntAud[9],
      },
      {
        name: "Nov",
        Requerimentos: qntReq[10],
        Nota_entrada: qntNotEnt[10],
        Nota_saida: qntNotSaid[10],
        Audiencia: qntAud[10],
      },
      {
        name: "Dez",
        Requerimentos: qntReq[11],
        Nota_entrada: qntNotEnt[11],
        Nota_saida: qntNotSaid[11],
        Audiencia: qntAud[11],
      },
    ];
    return (
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Requerimentos" fill="#00c0ef" />
        <Bar dataKey="Nota_entrada" fill="#f56954" />
        <Bar dataKey="Nota_saida" fill="#f39c12" />
        <Bar dataKey="Audiencia" fill="#00a65a" />
      </BarChart>
    );
  }
}
