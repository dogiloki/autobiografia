class Util{

	static IZQ=0;
	static DER=1;

	static cambioNum(actual,min,max,direccion=Util.IZQ){
		if(direccion==Util.IZQ){
			if(actual>min){
				actual--;
			}else{
				actual=max;
			}
		}else
		if(direccion==Util.DER){
			if(actual<max){
				actual++;
			}else{
				actual=min;
			}
		}
		return actual;
	}

}