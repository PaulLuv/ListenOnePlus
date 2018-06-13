interface Music{
  /**
   * 热门推荐
   */
   getRecommend(): Array<Object>;

   /**
    * 获取歌词
    * @param id track_id 歌曲的track_id
    */
   getLyric(id: Number);
}
