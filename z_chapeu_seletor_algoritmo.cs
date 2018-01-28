using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Selector
{
	class Program
	{
		static void Main(string[] args)
		{
			string voto;
			int a = 0;
			int b = 0;
			int c = 0;
			int d = 0;
			Console.WriteLine("OLÁ, EU SOU O ALGORITMO DO CHAPEU SELETOR!\nVou escolher para qual casa você será destinado, vejamos...\n");
			Console.WriteLine("Responda as perguntas escolhendo **SOMENTE** entre A, B, C ou D\n");

			do{
				Console.WriteLine("\n1) Qual dessas cores você gosta mais? \n[A] - Vermelho\n[B] - Preto\n[C] - Azul\n[D] - Verde");
				voto = Console.ReadLine();
			}
			while (voto.ToUpper() != "A" && voto.ToUpper() != "B" && voto.ToUpper() != "C" && voto.ToUpper() != "D");
			switch(voto.ToUpper())
			{
				case "A": a = a+1;
					break;
				case "B": b = b+1;
					break;
				case "C": c = c+1;
					break;
				case "D": d = d+1;
					break;
			}

			do{
				Console.WriteLine("\n2) Que tipo de animal lhe agrada mais? \n[A] - Mamíferos\n[B] - Répteis \n[C] - Aves \n[D] - Insetos");
				voto = Console.ReadLine();
			}
			while (voto.ToUpper() != "A" && voto.ToUpper() != "B" && voto.ToUpper() != "C" && voto.ToUpper() != "D") ;
			switch (voto.ToUpper())
			{
				case "A": a = a+1;
					break;
				case "B": b = b+1;
					break;
				case "C": c = c+1;
					break;
				case "D": d = d+1;
					break;
			}

			do{
				Console.WriteLine("\n3) Com qual elemento você mais se identifica? \n[A] - Fogo \n[B] - Água \n[C] - Ar \n[D] - Terra");
				voto = Console.ReadLine();
			}
			while (voto.ToUpper() != "A" && voto.ToUpper() != "B" && voto.ToUpper() != "C" && voto.ToUpper() != "D") ;
			switch (voto.ToUpper())
			{
				case "A": a = a+1;
					break;
				case "B": b = b+1;
					break;
				case "C": c = c+1;
					break;
				case "D": d = d+1;
					break;
			}

			do{
				Console.WriteLine("\n4) Qual desses materiais você utilizaria para costruir um amuleto? \n[A] - Metais \n[B] - Ossos \n[C] - Penas \n[D] - Ervas");
				voto = Console.ReadLine();
			}
			while (voto.ToUpper() != "A" && voto.ToUpper() != "B" && voto.ToUpper() != "C" && voto.ToUpper() != "D") ;
			switch (voto.ToUpper())
			{
				case "A": a = a+1;
					break;
				case "B": b = b+1;
					break;
				case "C": c = c+1;
					break;
				case "D": d = d+1;
					break;
			}

			if(a > b && a > c && a > d)
			{
				Console.WriteLine("\n\nSUA CASA É... GRIFINÓRIA!!");
			}
			else if (b > a && b > c && b > d)
			{
				Console.WriteLine("\n\nSUA CASA É... SONSERINA!!");
			}
			else if (c > a && c > b && c > d)
			{
				Console.WriteLine("\n\nSUA CASA É... CORVINAL!!");
			}
			else if (d > a && d > b && d > c)
			{
				Console.WriteLine("\n\nSUA CASA É... LUFA-LUFA!!");
			}
			else
			{
				Console.WriteLine("\n\nHmmm.... Percebo que você está com muitas dúvidas... volte outra hora e pense melhor em suas respostas.");
			}
			/*Console.WriteLine("Letra A teve " + a + " votos");
			Console.WriteLine("Letra B teve " + b + " votos");
			Console.WriteLine("Letra C teve " + c + " votos");
			Console.WriteLine("Letra D teve " + d + " votos");*/
			Console.ReadKey();
		}
	}
}
