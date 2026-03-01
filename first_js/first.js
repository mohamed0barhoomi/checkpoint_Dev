function inverser (ph)
{
    var i=0;
    var inv=""
    for(i=ph.length-1;i>=0;i--)
    {
        inv+=ph[i];
    }
    return inv;
}
console.log("phrase inverser : "+inverser("mohamed"))

function Compter (ph)
{
    var i=0;
    var sum=0;
    var dic={}
    for(i of ph)
        {
            if (dic[i])
            {
                dic[i]+=1;
            }
            else
                dic[i]=1;
            if (i == " ") continue;
            sum+=1;
        }
    console.log("sum du lettre = "+sum)  
    return dic;
}
console.log(Compter("hamdlt rabby istani bogoza dozza dozzza fi chwera3 lorop imjuboo lereur "))
function majuscule(ph)
{
    var new_text =ph[0].toUpperCase();
    for(var i=1;i<ph.length;i++)
    {
        if (ph[i-2] ==".")
        {
            new_text += ph[i].toUpperCase();
        }
        else
        {
            new_text+=ph[i];
        }
    }
    return new_text;

}
console.log(majuscule("my new. phrase majusciule. all my caractaire. n"))

function max_min(tab)
{
    var max=tab[0];
    var min=tab[0];
    for (var i of tab)
    {
        if(i>max)
            max=i;
        if(i<min)
            min=i;
    }
    console.log("max = "+max+"\nmin = "+min);
}
max_min([1,2,34,5,6,4,122,-7,0,86,-87])
function somme(tab)
{
    var somme =0;
    for (var i of tab)
    {
        somme +=i;
    }
    return somme ;
}
console.log("la somme du tab = "+somme([1,2,2,4,1]))
function fact(num){
    if(num==0)
        return 1;
    else
    {
        if(num<0)
         return -1;
        else{
            var fact=num;
            for (var i=1;i<num;i++)
            {
                fact*=i;
            }
            return fact;
        }
    }
}
console.log("poduit factorille = ", fact(5))

function test_prem(num){
   for (var i=2;i<(num/2);i++){
    if((num%i)==0)
        return "le num "+num+" n'est pas premiere";
    }
    return "le num "+num+" est premier";
}
console.log(test_prem(101))
